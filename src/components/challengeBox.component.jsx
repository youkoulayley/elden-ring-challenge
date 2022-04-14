import React from 'react';
import ChallengeComponent from "./challenge.component";
import WaitingComponent from "./waiting.component";

const ChallengeBoxComponent = (props) => {
    if (props.challenge.class) {
       return <ChallengeComponent seed={props.seed} challenge={props.challenge} />
    } else {
        return <WaitingComponent />
    }
}

export default ChallengeBoxComponent
