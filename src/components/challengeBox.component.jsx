import React from 'react';
import ChallengeComponent from "./challenge.component";
import WaitingComponent from "./waiting.component";
import {useScreenshot} from "use-react-screenshot";

const ChallengeBoxComponent = (props) => {

    const [image, takeScreenshot] = useScreenshot()

    const getImage = () => {
        takeScreenshot(document.querySelector('#challenge-'+props.challenge.id))
        localStorage.setItem(props.challenge.id, btoa(image))
    }


    if (props.challenge.class) {
       return <ChallengeComponent getImage={getImage} savedChallenges={props.savedChallenges} seed={props.seed} challenge={props.challenge} setSavedChallenge={props.setSavedChallenge} removeSavedChallenge={props.removeSavedChallenge} />
    } else {
        return <WaitingComponent />
    }
}

export default ChallengeBoxComponent
