import React from "react"
import { Button, Form, Modal } from "react-bootstrap"

const RenameModalComponent = ({id, challengeName, show, handleClose, setChallengeName, editSavedChallenge}) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit saved challenge</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className={"mb-3"} controlId={"formName"} onChange={(e) => setChallengeName(e.target.value)}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type={"name"} placeholder={id} />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"secondary"} onClick={handleClose}>
                    Close
                </Button>
                <Button variant={"primary"} onClick={() => {
                    editSavedChallenge(id, challengeName)
                    handleClose()
                }}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RenameModalComponent