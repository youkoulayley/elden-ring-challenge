import { Base64 } from "js-base64"
import React, { useEffect } from "react"
import { Card, CardGroup } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { getInfoFromSeedID } from "../../helpers/utils"
import ActionsComponent from "../actions/actions.component"
import "./saved-challenges.styles.scss"

const SavedChallengesComponent = ({ id, reloadSaved, setReloadSaved, savedChallenges, removeSavedChallenge, editSavedChallenge}) => {
    const { t } = useTranslation([ "common", "difficulty" ])
    const navigate = useNavigate()

    useEffect(() => {
        setReloadSaved(false)
    }, [ reloadSaved ])

    const getDifficulty = (id) => {
        const { difficulty } = getInfoFromSeedID(id)

        return difficulty
    }

    return (
        <>
            <h3>{t("savedChallenges")}</h3>
            <CardGroup className={"cards-saved-challenges"}>
                {
                    savedChallenges.map((e, idx) => (
                        <div key={e.id}>
                            <Card key={e.id}
                                bg={id === e.id ? "secondary" : "light"}
                                className={"saved-challenge"}
                                onClick={() => navigate("/" + e.id)}
                            >
                                <Card.Img
                                    variant="top"
                                    src={(Base64.decode(e.image))}
                                    alt={"image challenge"}
                                />
                                <Card.Body>
                                    <Card.Title>
                                        {
                                            e.name === undefined || e.name === "" ?
                                                "Challenge #" + (idx + 1)
                                                :
                                                e.name
                                        }
                                    </Card.Title>

                                    <p className={"text-start"}>
                                        <strong>ID</strong>: {e.id}
                                    </p>
                                    <p className={"text-start"}>
                                        <strong>{t("difficulty:name")}</strong>: {t("difficulty:" + getDifficulty(e.id))}
                                    </p>
                                    <ActionsComponent key={e.id} removeSavedChallenge={removeSavedChallenge} id={e.id} name={e.name} editSavedChallenge={editSavedChallenge} />
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                }
            </CardGroup>
        </>
    )
}

export default SavedChallengesComponent
