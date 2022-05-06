import React, { useState } from "react"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import RenameModalComponent from "../rename-modal/rename-modal.component"

const ActionsComponent = ({ id, name, removeSavedChallenge, editSavedChallenge }) => {
    const {t} = useTranslation("common")

    const [ hoveredDelete, setHoveredDelete ] = useState(false)
    const toggleHoverDelete = () => setHoveredDelete(!hoveredDelete)

    const [ hoveredEdit, setHoveredEdit ] = useState(false)
    const toggleHoverEdit = () => setHoveredEdit(!hoveredEdit)

    const [ show, setShow ] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const [ challengeName, setChallengeName ] = useState("")

    const confirmDelete = () => {
        let chal = name + " ("+ id + ")"
        if (name === undefined || name === "") {
            chal = id
        }

        const text = t("deleteConfirm", { id: chal })
        if (confirm(text) === true) {
            removeSavedChallenge(id)
        }
    }

    return (
        <div className={"actions float-end"}>
            <OverlayTrigger overlay={
                <Tooltip>
                    {t("tooltipEdit")}
                </Tooltip>
            }>
                <i onClick={handleShow}
                    className={hoveredEdit ? "bi bi-pen-fill" : "bi bi-pen"}
                    onMouseEnter={toggleHoverEdit}
                    onMouseLeave={toggleHoverEdit}
                />
            </OverlayTrigger>
            <OverlayTrigger overlay={
                <Tooltip>
                    {t("tooltipDelete")}
                </Tooltip>
            }>
                <i onClick={confirmDelete}
                    className={hoveredDelete ? "bi bi-trash-fill" : "bi bi-trash"}
                    onMouseEnter={toggleHoverDelete}
                    onMouseLeave={toggleHoverDelete}
                />
            </OverlayTrigger>
            <RenameModalComponent id={id} 
                challengeName={challengeName} 
                show={show}
                handleClose={handleClose}
                setChallengeName={setChallengeName}
                editSavedChallenge={editSavedChallenge}
            />
        </div>
    )
}

export default ActionsComponent