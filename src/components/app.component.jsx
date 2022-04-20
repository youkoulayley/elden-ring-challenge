import React, {useState} from "react";

import {excludeClasses, excludeKeepsakes, getConstraints, getWeaponTypes} from "../helpers/rules";
import NavbarComponent from "./navbar.component";
import WelcomeComponent from "./welcome.component";
import ChallengeBox from "./challengeBox.component";
import FormGenerateComponent from "./formGenerate.component";
import {difficultyData} from "../data/difficulty.data";
import { nanoid } from 'nanoid'
import * as seedrandom from 'seedrandom';
import ErrorComponent from "./error.component";
import {ToastContainer} from "react-bootstrap";
import SavedChallengesComponent from "./savedChallenges.component";
import {exportAsImage} from "../helpers/utils";
import FooterComponent from "./footer.component";

const AppComponent = () => {
    const [difficulty, setDifficulty] = useState(1)
    const [challenge, setChallenge] = useState({})
    const [savedChallenges, setSavedChallenges] = useState(() => {
        let challenges = JSON.parse(localStorage.getItem("savedChallenges"))
        if (challenges === null) {
            challenges = []
        }

        return challenges
    })
    const [errors, setErrors] = useState([])
    const [reloadSaved, setReloadSaved] = useState(false)

    const setSavedChallenge = (id) => {
        if (savedChallenges.length === 3) {
            setError(new Error("too many challenges"))
            return false
        }

        setSavedChallenges([...savedChallenges, id])
        localStorage.setItem("savedChallenges", JSON.stringify([...savedChallenges, id]))

        const element = document.querySelector("#challenge-"+id)
        exportAsImage(element).then((e) => {
            localStorage.setItem(id, e)
            setReloadSaved(true)
        })

        return true
    }

    const removeSavedChallenge = (id) => {
        const filtered = savedChallenges.filter((e) => e !== id)
        localStorage.setItem("savedChallenges", JSON.stringify(filtered))
        localStorage.removeItem(id)
        setSavedChallenges(filtered)
    }

    const setError = (error) => {
        setErrors([...errors, {id: nanoid(10), err: error}])
    }

    const removeError = (error) => {
        let newErrors = errors.filter((e) => e.id !== error.id)
        setErrors(newErrors)
    }

    const newChallenge = (difficulty) => {
        const seedID = difficulty + "-" + nanoid()
        generateChallenge(seedID)
    }

    const getDifficultyFromSeedID = (seedID) => {
        const difficulty = seedID.split('-')[0];

        if (difficulty.length !== 1) {
            setError(new Error("invalid id"))
            return 0
        }

        return difficulty
    }

    const generateChallenge = (seedID) => {
        const seeder = seedrandom(seedID)
        const difficulty = getDifficultyFromSeedID(seedID)
        if (difficulty === 0) {
            return
        }

        const dif = difficultyData[difficulty-1]
        const classes = excludeClasses(difficulty)
        const randomClass = Math.floor(seeder() * classes.length);

        const keepsakes = excludeKeepsakes(difficulty)
        const randomKeepsakes = Math.floor(seeder() * keepsakes.length);

        const selectedConstraints = []
        for (let i = 0; i < dif.constraints; i++) {
            const constraints = getConstraints(selectedConstraints, difficulty)
            const randomConstraints = Math.floor(seeder() * constraints.length);

            selectedConstraints.push(constraints[randomConstraints])
        }

        const selectedWeaponTypes = []
        for (let i = 0; i < dif.weaponTypes * 2; i++) {
            const weaponTypes = getWeaponTypes(selectedWeaponTypes)
            const randomWeaponTypes = Math.floor(seeder() * weaponTypes.length);

            selectedWeaponTypes.push(weaponTypes[randomWeaponTypes])
        }

        const half = Math.ceil(selectedWeaponTypes.length / 2);
        const leftWeaponTypes = selectedWeaponTypes.slice(0, half)
        const rightWeaponTypes = selectedWeaponTypes.slice(-half)

        const challengeData = {
            id: seedID,
            class: classes[randomClass],
            keepsake: keepsakes[randomKeepsakes],
            constraints: selectedConstraints,
            weaponTypes: {
                left: leftWeaponTypes,
                right: rightWeaponTypes
            }
        }

        setChallenge(challengeData)
    }

    return (
        <>
            <div style={{ paddingLeft: "0px", minHeight: "100%", marginBottom: "-92px"}}  className="container-fluid">
                <div className="row">
                    <div style={{ paddingRight: "0px"}} className="col">
                        <NavbarComponent />
                    </div>
                </div>
                <ToastContainer style={{position: "fixed", right:"20px", top:"80px"}}>
                    {
                        errors.map((e) => {
                            return <ErrorComponent key={e.id} error={e} removeError={removeError} />
                        })
                    }
                </ToastContainer>
                <div className="row justify-content-md-center">
                    <div style={{ marginTop: "20px"}} className="col-8 text-center">
                        <WelcomeComponent />
                        <FormGenerateComponent selectDifficulty={setDifficulty} newChallenge={newChallenge} generateChallenge={generateChallenge} difficulty={difficulty}/>
                        <hr />
                        <ChallengeBox savedChallenges={savedChallenges} challenge={challenge} setSavedChallenge={setSavedChallenge} removeSavedChallenge={removeSavedChallenge}/>
                        {
                            savedChallenges.length > 0 ?
                                <>
                                    <hr />
                                    <SavedChallengesComponent generateChallenge={generateChallenge} id={challenge.id} reloadSaved={reloadSaved} setReloadSaved={setReloadSaved} savedChallenges={savedChallenges} />
                                </>
                            :
                                <></>
                        }
                    </div>
                </div>
                <div style={{height: "100px"}}></div>
            </div>

            <FooterComponent />
        </>
)
}

export default AppComponent
