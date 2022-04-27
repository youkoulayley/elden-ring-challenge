import React from "react"
import { Row } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import SaveComponent from "../save/save.component"

const ChallengeHeaderComponent = ({challenge, savedChallenges, setSavedChallenge, removeSavedChallenge}) => {
    const { t } = useTranslation([ "common" ])

    return (
        <Row>
            <h2>{t("challenge.title")}</h2>
            <p><em>{challenge.id}</em></p>
            <SaveComponent id={challenge.id} savedChallenges={savedChallenges} setSavedChallenge={setSavedChallenge}
                removeSavedChallenge={removeSavedChallenge} />
        </Row>
    )
}

export default ChallengeHeaderComponent