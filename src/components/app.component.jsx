import React, {useState} from "react";

import {excludeClasses, excludeKeepsakes, getConstraints, getWeaponTypes} from "../helpers/rules";
import {getDifficultyFromSeedID} from "../helpers/difficulty";
import NavbarComponent from "./navbar.component";
import WelcomeComponent from "./welcome.component";
import ChallengeBox from "./challengeBox.component";
import FormGenerateComponent from "./formGenerate.component";
import {difficultyData} from "../data/difficulty.data";
import { nanoid } from 'nanoid'
import * as seedrandom from 'seedrandom';

const AppComponent = () => {
    const [difficulty, setDifficulty] = useState(1)
    const [seed, setSeed] = useState("")
    const [challenge, setChallenge] = useState({})

    const newChallenge = (difficulty) => {
        const seedID = difficulty + "-" + nanoid()
        generateChallenge(seedID)
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
            class: classes[randomClass],
            keepsake: keepsakes[randomKeepsakes],
            constraints: selectedConstraints,
            weaponTypes: {
                left: leftWeaponTypes,
                right: rightWeaponTypes
            }
        }

        setChallenge(challengeData)
        setSeed(seedID);
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
                    <FormGenerateComponent selectDifficulty={setDifficulty} newChallenge={newChallenge} generateChallenge={generateChallenge} difficulty={difficulty}/>
                    <hr />
                    <ChallengeBox seed={seed} challenge={challenge}/>
                </div>
            </div>
        </div>
    )
}

export default AppComponent
