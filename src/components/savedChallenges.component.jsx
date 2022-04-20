import React, {useEffect} from 'react';
import {Card, CardGroup} from "react-bootstrap";
import {getDifficultyFromSeedID} from "../helpers/utils";
import {useTranslation} from "react-i18next";

const SavedChallengesComponent = ({id, reloadSaved, setReloadSaved, savedChallenges, generateChallenge}) => {
    const {t} = useTranslation('common')

    useEffect(() => {
        setReloadSaved(false)
    }, [reloadSaved])

    return (
        <>
            <h3>{t()}</h3>
            <CardGroup style={{marginBottom: "20px"}}>
                {
                    savedChallenges.map((e, idx) => (
                    <div key={e} style={{cursor: "pointer"}} onClick={() => generateChallenge(e)}>
                        <Card key={e} bg={id === e ? "secondary" : "light"} style={{ maxWidth: '24rem' }}>
                            <Card.Img variant="top" src={atob(localStorage.getItem(e))} alt={"image challenge"} />
                            <Card.Body>
                                <Card.Title>Challenge #{idx+1}</Card.Title>
                                <p className={"text-start"}><strong>ID</strong>: {e}</p>
                                <p className={"text-start"}><strong>Difficulty</strong>: {t("difficulty."+getDifficultyFromSeedID(e))}</p>
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