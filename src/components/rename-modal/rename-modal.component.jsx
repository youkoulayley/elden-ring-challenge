import React from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { useTranslation } from "react-i18next"

const RenameModalComponent = ({id, challengeName, show, handleClose, setChallengeName, editSavedChallenge}) => {
    const {t} = useTranslation("common")

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{t("renameTitle")}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className={"mb-3"} controlId={"formName"} onChange={(e) => setChallengeName(e.target.value)}>
                    <Form.Label>{t("name")}</Form.Label>
                    <Form.Control type={"name"} placeholder={id} />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"secondary"} onClick={handleClose}>
                    {t("cancel")}
                </Button>
                <Button variant={"primary"} onClick={() => {
                    editSavedChallenge(id, challengeName)
                    handleClose()
                }}>
                    {t("save")}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RenameModalComponent