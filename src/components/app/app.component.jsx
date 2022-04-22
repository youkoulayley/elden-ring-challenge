import { nanoid } from "nanoid"
import React, { useState } from "react"
import { Col, Container, Row, ToastContainer } from "react-bootstrap"
import * as seedrandom from "seedrandom"
import { difficultyData } from "../../data/difficulty.data"
import { excludeClasses, excludeKeepsakes, getConstraints, getCrystalTears, getWeaponTypes } from "../../helpers/rules"
import { exportAsImage } from "../../helpers/utils"
import ChallengeBox from "../challenge-box/challenge-box.component"
import ErrorComponent from "../error/error.component"
import FooterComponent from "../footer/footer.component"
import FormChallengeComponent from "../form-challenge/form-challenge.component"
import NavbarComponent from "../navbar/navbar.component"
import SavedChallengesComponent from "../saved-challenges/saved-challenges.component"
import WelcomeComponent from "../welcome/welcome.component"
import "./app.styles.scss"

const AppComponent = () => {
    const [ challenge, setChallenge ] = useState({})
    const [ savedChallenges, setSavedChallenges ] = useState(() => {
        let challenges = JSON.parse(localStorage.getItem("savedChallenges"))
        if (challenges === null) {
            challenges = []
        }

        return challenges
    })
    const [ errors, setErrors ] = useState([])
    const [ reloadSaved, setReloadSaved ] = useState(false)

    const setSavedChallenge = (id) => {
        if (savedChallenges.length === 3) {
            setError(new Error("too many challenges"))
            return false
        }

        const element = document.querySelector("#challenge-" + id)
        let image = ""
        exportAsImage(element).then((e) => {
            image = e
            setSavedChallenges([ ...savedChallenges, {"id": id, "image": image} ])
            localStorage.setItem("savedChallenges", JSON.stringify([ ...savedChallenges, {"id": id, "image": image} ]))

            setReloadSaved(true)
        })


        return true
    }

    const removeSavedChallenge = (id) => {
        const filtered = savedChallenges.filter((e) => e.id !== id)
        localStorage.setItem("savedChallenges", JSON.stringify(filtered))
        localStorage.removeItem(id)
        setSavedChallenges(filtered)
    }

    const setError = (error) => {
        setErrors([ ...errors, {id: nanoid(10), err: error} ])
    }

    const removeError = (error) => {
        const newErrors = errors.filter((e) => e.id !== error.id)
        setErrors(newErrors)
    }

    const newChallenge = (difficulty) => {
        const seedID = difficulty + "-" + nanoid()
        searchChallenge(seedID)
    }

    const getDifficultyFromSeedID = (seedID) => {
        const difficulty = seedID.split("-")[0]

        if (difficulty.length !== 1) {
            setError(new Error("invalid id"))
            return 0
        }

        return difficulty
    }

    const searchChallenge = (seedID) => {
        const seeder = seedrandom(seedID)
        const difficulty = getDifficultyFromSeedID(seedID)
        if (difficulty === 0) {
            return
        }

        const dif = difficultyData[difficulty - 1]
        const classes = excludeClasses(difficulty)
        const randomClass = Math.floor(seeder() * classes.length)

        const keepsakes = excludeKeepsakes(difficulty)
        const randomKeepsakes = Math.floor(seeder() * keepsakes.length)

        const selectedCrystalTears = []
        for (let i = 0; i < dif.crystalTears; i++) {
            const crystalTears = getCrystalTears(selectedCrystalTears)
            const randomCrystalTears = Math.floor(seeder() * crystalTears.length)

            selectedCrystalTears.push(crystalTears[randomCrystalTears])
        }

        const selectedConstraints = []
        for (let i = 0; i < dif.constraints; i++) {
            const constraints = getConstraints(selectedConstraints, difficulty)
            const randomConstraints = Math.floor(seeder() * constraints.length)

            selectedConstraints.push(constraints[randomConstraints])
        }

        const selectedLeftWeaponTypes = []
        for (let i = 0; i < dif.weaponTypes; i++) {
            const weaponTypes = getWeaponTypes(selectedLeftWeaponTypes)
            const randomWeaponTypes = Math.floor(seeder() * weaponTypes.length)

            selectedLeftWeaponTypes.push(weaponTypes[randomWeaponTypes])
        }

        const selectedRightWeaponTypes = []
        for (let i = 0; i < dif.weaponTypes; i++) {
            const weaponTypes = getWeaponTypes(selectedRightWeaponTypes)
            const randomWeaponTypes = Math.floor(seeder() * weaponTypes.length)

            selectedRightWeaponTypes.push(weaponTypes[randomWeaponTypes])
        }

        const challengeData = {
            id: seedID,
            class: classes[randomClass],
            keepsake: keepsakes[randomKeepsakes],
            crystalTears: selectedCrystalTears,
            constraints: selectedConstraints,
            weaponTypes: {
                left: selectedLeftWeaponTypes,
                right: selectedRightWeaponTypes,
            },
        }

        setChallenge(challengeData)
    }

    return (
        <>
            <Container className={"app"} fluid>
                <Row>
                    <Col className={"navbar-col"}>
                        <NavbarComponent/>
                    </Col>
                </Row>
                <ToastContainer className={"toast-notifications"}>
                    {
                        errors.map((e) => {
                            return <ErrorComponent key={e.id} error={e} removeError={removeError}/>
                        })
                    }
                </ToastContainer>
                <Row className="justify-content-md-center">
                    <Col md={8} className={"app-body text-center"}>
                        <WelcomeComponent/>
                        <FormChallengeComponent newChallenge={newChallenge}
                            searchChallenge={searchChallenge}/>
                        <hr/>
                        <ChallengeBox savedChallenges={savedChallenges} challenge={challenge}
                            setSavedChallenge={setSavedChallenge}
                            removeSavedChallenge={removeSavedChallenge}/>
                        {
                            savedChallenges.length > 0 ?
                                <>
                                    <hr/>
                                    <SavedChallengesComponent searchChallenge={searchChallenge} id={challenge.id}
                                        reloadSaved={reloadSaved} setReloadSaved={setReloadSaved}
                                        savedChallenges={savedChallenges}/>
                                </>
                                :
                                <></>
                        }
                    </Col>
                </Row>

                <div className="pusher"></div>
            </Container>

            <FooterComponent/>
        </>
    )
}

export default AppComponent
