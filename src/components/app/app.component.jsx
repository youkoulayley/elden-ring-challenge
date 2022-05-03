import { nanoid } from "nanoid"
import React, { useState } from "react"
import { Col, Container, Row, ToastContainer } from "react-bootstrap"
import * as seedrandom from "seedrandom"
import { data } from "../../data/data"
import {
    excludeClasses,
    excludeKeepsakes,
    getConstraints,
    getCrystalTears,
    getTalismans,
    getWeaponTypes,
} from "../../helpers/rules"
import { exportAsImage, generateInfoForSeedID, getInfoFromSeedID } from "../../helpers/utils"
import ChallengeComponent from "../challenge/challenge.component"
import ErrorComponent from "../error/error.component"
import FooterComponent from "../footer/footer.component"
import FormChallengeComponent from "../form-challenge/form-challenge.component"
import NavbarComponent from "../navbar/navbar.component"
import SavedChallengesComponent from "../saved-challenges/saved-challenges.component"
import WaitingComponent from "../waiting/waiting.component"
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
            setSavedChallenges([ ...savedChallenges, { "id": id, "name": "", "image": image } ])
            localStorage.setItem("savedChallenges", JSON.stringify([ ...savedChallenges, { "id": id, "image": image } ]))

            setReloadSaved(true)
        })

        return true
    }

    const editSavedChallenge = (id, name) => {
        const idx = savedChallenges.findIndex((challenge) => challenge.id === id)
        savedChallenges[idx].name = name

        setSavedChallenges(savedChallenges)
        localStorage.setItem("savedChallenges", JSON.stringify(savedChallenges))
        setReloadSaved(true)
    }

    const removeSavedChallenge = (id) => {
        const filtered = savedChallenges.filter((e) => e.id !== id)
        localStorage.setItem("savedChallenges", JSON.stringify(filtered))
        localStorage.removeItem(id)
        setSavedChallenges(filtered)
    }

    const setError = (error) => {
        setErrors([ ...errors, { id: nanoid(10), err: error } ])
    }

    const removeError = (error) => {
        const newErrors = errors.filter((e) => e.id !== error.id)
        setErrors(newErrors)
    }

    const newChallenge = (difficulty, flaskOfWondrousPhysick, talismans) => {
        let flask = 0
        if (flaskOfWondrousPhysick) {
            flask = 1
        }

        let talisman = 0
        if (talismans) {
            talisman = 1
        }

        const info = generateInfoForSeedID(difficulty, flask, talisman)
        const seedID = info + "-" + nanoid(12)

        searchChallenge(seedID)
    }

    const searchChallenge = (seedID) => {
        const seeder = seedrandom(seedID)

        const {difficulty, flask, talismans, version} = getInfoFromSeedID(seedID)
        if (difficulty === "0" || version === "") {
            setError(new Error("invalid id"))
            return
        }

        const dif = data[version].difficulties[difficulty - 1]
        const classes = excludeClasses(difficulty, version)
        const randomClass = Math.floor(seeder() * classes.length)

        const keepsakes = excludeKeepsakes(difficulty, version)
        const randomKeepsakes = Math.floor(seeder() * keepsakes.length)

        const selectedCrystalTears = []
        if (flask === "1") {
            for (let i = 0; i < dif.crystalTears; i++) {
                const crystalTears = getCrystalTears(selectedCrystalTears, version)
                const randomCrystalTears = Math.floor(seeder() * crystalTears.length)

                selectedCrystalTears.push(crystalTears[randomCrystalTears])
            }
        }

        const selectedTalismans = []
        if (talismans === "1") {
            for (let i = 0; i < dif.talismans; i++) {
                const talisman = getTalismans(selectedTalismans, version)
                const randomTalismans = Math.floor(seeder() * talisman.length)

                selectedTalismans.push(talisman[randomTalismans])
            }
        }

        const selectedConstraints = []
        for (let i = 0; i < dif.constraints; i++) {
            const constraints = getConstraints(selectedConstraints, difficulty, version)
            const randomConstraints = Math.floor(seeder() * constraints.length)

            selectedConstraints.push(constraints[randomConstraints])
        }

        const selectedLeftWeaponTypes = []
        for (let i = 0; i < dif.weaponTypes; i++) {
            const weaponTypes = getWeaponTypes(selectedLeftWeaponTypes, version)
            const randomWeaponTypes = Math.floor(seeder() * weaponTypes.length)

            selectedLeftWeaponTypes.push(weaponTypes[randomWeaponTypes])
        }

        const selectedRightWeaponTypes = []
        for (let i = 0; i < dif.weaponTypes; i++) {
            const weaponTypes = getWeaponTypes(selectedRightWeaponTypes, version)
            const randomWeaponTypes = Math.floor(seeder() * weaponTypes.length)

            selectedRightWeaponTypes.push(weaponTypes[randomWeaponTypes])
        }

        const challengeData = {
            id: seedID,
            class: classes[randomClass],
            keepsake: keepsakes[randomKeepsakes],
            crystalTears: selectedCrystalTears,
            talismans: selectedTalismans,
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
                        <NavbarComponent />
                    </Col>
                </Row>
                <ToastContainer className={"toast-notifications"}>
                    {
                        errors.map((e) => {
                            return <ErrorComponent key={e.id} error={e} removeError={removeError} />
                        })
                    }
                </ToastContainer>
                <Row className="justify-content-md-center">
                    <Col md={8} className={"app-body text-center"}>
                        <WelcomeComponent />
                        <FormChallengeComponent newChallenge={newChallenge}
                            searchChallenge={searchChallenge} />
                        <hr />
                        {
                            challenge.class ?
                                <ChallengeComponent savedChallenges={savedChallenges} challenge={challenge}
                                    setSavedChallenge={setSavedChallenge}
                                    removeSavedChallenge={removeSavedChallenge} />
                                :
                                <WaitingComponent />
                        }
                        {
                            savedChallenges.length > 0 ?
                                <>
                                    <hr />
                                    <SavedChallengesComponent searchChallenge={searchChallenge} id={challenge.id}
                                        reloadSaved={reloadSaved} setReloadSaved={setReloadSaved}
                                        savedChallenges={savedChallenges} removeSavedChallenge={removeSavedChallenge}
                                        editSavedChallenge={editSavedChallenge}
                                    />
                                </>
                                :
                                <></>
                        }
                    </Col>
                </Row>

                <div className="pusher"></div>
            </Container>

            <FooterComponent />
        </>
    )
}

export default AppComponent
