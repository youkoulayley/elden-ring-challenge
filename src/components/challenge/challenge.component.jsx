import React from "react"
import { Container } from "react-bootstrap"
import { latestVersion } from "../../data/utils"
import { getInfoFromSeedID } from "../../helpers/utils"
import ChallengeBodyComponent from "../challenge-body/challenge-body.component"
import ChallengeHeaderComponent from "../challenge-header/challenge-header.component"
import WarningAlertComponent from "../warning-alert/warning-alert.component"
import "./challenge.styles.scss"

const ChallengeComponent = ({ savedChallenges, challenge, setSavedChallenge, removeSavedChallenge }) => {
    const getRuleVersion = (id) => {
        const { version } = getInfoFromSeedID(id)

        return version
    }

    return (
        <Container id={"challenge-" + challenge.id} className={"challenge text-center rounded-3 bg-light"} fluid>
            {
                getRuleVersion(challenge.id) !== latestVersion() ?
                    <WarningAlertComponent key={challenge.id} />
                    :
                    <></>
            }

            <ChallengeHeaderComponent challenge={challenge} savedChallenges={savedChallenges}
                setSavedChallenge={setSavedChallenge} removeSavedChallenge={removeSavedChallenge} />

            <ChallengeBodyComponent challenge={challenge} />
        </Container>
    )
}

export default ChallengeComponent
