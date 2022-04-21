import React from "react"
import ChallengeComponent from "../challenge/challenge.component"
import WaitingComponent from "../waiting/waiting.component"

const ChallengeBoxComponent = (props) => {
    if (props.challenge.class) {
        return <ChallengeComponent {...props} />
    } else {
        return <WaitingComponent />
    }
}

export default ChallengeBoxComponent
