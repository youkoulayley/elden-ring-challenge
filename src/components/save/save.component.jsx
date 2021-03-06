import React from "react"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { TwitterShareButton } from "react-share"
import "./save.styles.scss"

const SaveComponent = ({ id, savedChallenges, setSavedChallenge, removeSavedChallenge }) => {
    const { t } = useTranslation("common")

    const toggleSave = (id) => {
        const element = document.getElementById("bookmark")

        if (savedChallenges.some(e => e.id === id)) {
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

    const isSaved = (id) => (savedChallenges.some(e => e.id === id))

    return (
        <>
            <OverlayTrigger overlay={
                <Tooltip>
                    {t("shareTwitter")}
                </Tooltip>
            }>
                <TwitterShareButton
                    url={window.location.href}
                    title={t("shareMessage")}
                    className={"twitter-button"}
                >
                    <i key={"twitter" + id}
                        id={"twitter"}
                        className={"twitter-button end-0 bi bi-twitter"}
                    />
                </TwitterShareButton>
            </OverlayTrigger>

            <OverlayTrigger overlay={
                <Tooltip>
                    {
                        isSaved(id) ?
                            t("tooltipUnsave")
                            :
                            t("tooltipSave")
                    }
                </Tooltip>
            }>
                <i key={"bookmark-" + id}
                    id={"bookmark"}
                    className={`save-button end-0 bi ${isSaved(id) ? "bi-bookmark-fill" : "bi-bookmark"}`}
                    onClick={() => {
                        toggleSave(id)
                    }}
                />
            </OverlayTrigger>
        </>
    )
}

export default SaveComponent
