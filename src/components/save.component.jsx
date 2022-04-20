import React from "react";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import {useTranslation} from "react-i18next";

const SaveComponent = ({id, savedChallenges, setSavedChallenge, removeSavedChallenge}) => {
    const {t} = useTranslation("common")

    const toggleSave = (id) => {
        let element = document.getElementById("bookmark")

        if (savedChallenges.includes(id)) {
            removeSavedChallenge(id)
            element.classList.remove("bi-bookmark-fill")
            element.classList.add("bi-bookmark")
            return
        }

        if (setSavedChallenge(id)) {
            element.classList.add("bi-bookmark-fill")
            element.classList.remove("bi-bookmark")
        }
    }

    const isSaved = (id)  => (savedChallenges.includes(id));


    return (
        <OverlayTrigger overlay={
            <Tooltip>
                {t("tooltipSave")}
            </Tooltip>
        }>
            <i key={id} id={"bookmark"} style={{fontSize: "32px", cursor: "pointer", position: "absolute", left: "75%", width: "fit-content"}}
               className={`end-0 bi ${isSaved(id) ? "bi-bookmark-fill" : "bi-bookmark"}`}
               onClick={() => {toggleSave(id)}}
            />
        </OverlayTrigger>
    )
}

export default SaveComponent