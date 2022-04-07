import React, {useState} from "react";
import {excludeClasses, excludeKeepsakes, getConstraints, getWeaponTypes} from "../helpers/rules";

import NavbarComponent from "./navbar.component";
import WelcomeComponent from "./welcome.component";
import ChallengeBox from "./challengeBox.component";
import FormGenerateComponent from "./formGenerate.component";
import {difficultyData} from "../data/difficulty.data";

const AppComponent = () => {
    const [difficulty, setDifficulty] = useState(1)
    const [challenge, setChallenge] = useState({})

    const selectDifficulty = (id) => {
        setDifficulty(id)
    }

    const generateChallenge = (difficulty) => {
        const dif = difficultyData[difficulty-1]
        const classes = excludeClasses(difficulty)
        const randomClass = Math.floor(Math.random() * classes.length);

        const keepsakes = excludeKeepsakes(difficulty)
        const randomKeepsakes = Math.floor(Math.random() * keepsakes.length);

        const selectedConstraints = []
        for (let i = 0; i < dif.constraints; i++) {
            const constraints = getConstraints(selectedConstraints, difficulty)
            const randomConstraints = Math.floor(Math.random() * constraints.length);

            selectedConstraints.push(constraints[randomConstraints])
        }

        const selectedWeaponTypes = []
        for (let i = 0; i < dif.weaponTypes * 2; i++) {
            const weaponTypes = getWeaponTypes(selectedWeaponTypes)
            const randomWeaponTypes = Math.floor(Math.random() * weaponTypes.length);

            selectedWeaponTypes.push(weaponTypes[randomWeaponTypes])
        }

        const half = Math.ceil(selectedWeaponTypes.length / 2);
        const leftWeaponTypes = selectedWeaponTypes.slice(0, half)
        const rightWeaponTypes = selectedWeaponTypes.slice(-half)

        setChallenge({
            class: classes[randomClass],
            keepsake: keepsakes[randomKeepsakes],
            constraints: selectedConstraints,
            weaponTypes: {
                left: leftWeaponTypes,
                right: rightWeaponTypes
            }
        })
    }

    return (
        <div style={{ paddingLeft: "0px"}}  className="container-fluid">
            <div className="row">
                <div style={{ paddingRight: "0px"}} className="col">
                    <NavbarComponent />
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div style={{ marginTop: "20px"}} className="col-8 text-center">
                    <WelcomeComponent />
                    <FormGenerateComponent selectDifficulty={selectDifficulty} generateChallenge={generateChallenge} difficulty={difficulty}/>
                    <hr />
                    <ChallengeBox challenge={challenge}/>
                </div>
            </div>
        </div>
    )
}

export default AppComponent
