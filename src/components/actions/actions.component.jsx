import React, { useState } from "react"
import RenameModalComponent from "../rename-modal/rename-modal.component"

const ActionsComponent = ({ id, name, removeSavedChallenge, editSavedChallenge }) => {
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

        const text = "You want to delete '"+ chal +"'.\nAre you sure ?"
        if (confirm(text) === true) {
            removeSavedChallenge(id)
        }
    }

    return (
        <div className={"actions float-end"}>
            <i onClick={handleShow}
                className={hoveredEdit ? "bi bi-pen-fill" : "bi bi-pen"}
                onMouseEnter={toggleHoverEdit}
                onMouseLeave={toggleHoverEdit}
            />
            <i onClick={confirmDelete}
                className={hoveredDelete ? "bi bi-trash-fill" : "bi bi-trash"}
                onMouseEnter={toggleHoverDelete}
                onMouseLeave={toggleHoverDelete}
            />
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