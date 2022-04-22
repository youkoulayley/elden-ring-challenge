import React, { useEffect } from "react"
import { Card, CardGroup } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { getDifficultyFromSeedID } from "../../helpers/utils"
import "./saved-challenges.styles.scss"

const SavedChallengesComponent = ({id, reloadSaved, setReloadSaved, savedChallenges, searchChallenge}) => {
    const {t} = useTranslation([ "common", "difficulty" ])

    useEffect(() => {
        setReloadSaved(false)
    }, [ reloadSaved ])

    return (
        <>
            <h3>{t("savedChallenges")}</h3>
            <CardGroup className={"cards-saved-challenges"}>
                {
                    savedChallenges.map((e, idx) => (
                        <div key={e.id}
                            className={"saved-challenge"}
                            onClick={() => searchChallenge(e.id)}
                        >
                            <Card key={e.id}
                                bg={id === e.id ? "secondary" : "light"}
                            >
                                <Card.Img
                                    variant="top"
                                    src={(atob(e.image))}
                                    alt={"image challenge"}
                                />
                                <Card.Body>
                                    <Card.Title>
                                        Challenge #{idx + 1}
                                    </Card.Title>
                                    <p className={"text-start"}>
                                        <strong>ID</strong>: {e.id}
                                    </p>
                                    <p className={"text-start"}>
                                        <strong>{t("difficulty:name")}</strong>: {t("difficulty:" + getDifficultyFromSeedID(e.id))}
                                    </p>
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
