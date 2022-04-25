import React, { useState } from "react"
import { Alert } from "react-bootstrap"
import { useTranslation } from "react-i18next"

const WarningAlertComponent = () => {
    const [ show, setShow ] = useState(true)
    const {t} = useTranslation("error")

    return (
        <Alert variant={"warning"} dismissible show={show} onClose={() => setShow(false)}>
            <p>
                {t("old challenge")}
            </p>
        </Alert>
    )
}

export default WarningAlertComponent