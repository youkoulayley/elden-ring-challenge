import React, { useEffect } from "react"
import { Card, CardGroup } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { getDifficultyFromSeedID } from "../../helpers/utils"
import "./saved-challenges.styles.scss"

const SavedChallengesComponent = ({id, reloadSaved, setReloadSaved, savedChallenges, generateChallenge}) => {
    const {t} = useTranslation("common")

    useEffect(() => {
        setReloadSaved(false)
    }, [ reloadSaved ])

    return (
        <>
            <h3>{t("savedChallenges")}</h3>
            <CardGroup className={"cards-saved-challenges"}>
                {
                    savedChallenges.map((e, idx) => (
                        <div key={e}
                            className={"saved-challenge"}
                            onClick={() => generateChallenge(e)}
                        >
                            <Card key={e}
                                bg={id === e ? "secondary" : "light"}
                            >
                                <Card.Img
                                    variant="top"
                                    src={window.atob(localStorage.getItem(e))}
                                    alt={"image challenge"}
                                />
                                <Card.Body>
                                    <Card.Title>
                                        Challenge #{idx + 1}
                                    </Card.Title>
                                    <p className={"text-start"}>
                                        <strong>ID</strong>: {e}
                                    </p>
                                    <p className={"text-start"}>
                                        <strong>{t("difficulty.name")}</strong>: {t("difficulty." + getDifficultyFromSeedID(e))}
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