import React, {useEffect, useState} from 'react';
import {Toast} from "react-bootstrap";
import {useTranslation} from "react-i18next";

const ErrorComponent = ({error, removeError}) => {
    const {t} = useTranslation('common');
    const [show, setShow] = useState(true);

    useEffect(() => {
        if (show === false) {
            removeError(error)
        }
    }, [show])

    return (
        <Toast style={{cursor:"pointer"}} onClick={() => {setShow(false)}} onClose={() => setShow(false)} show={show} bg={"danger"} delay={3000} autohide>
            <Toast.Body>{t("errors."+error.err.message)}</Toast.Body>
        </Toast>
    )
}

export default ErrorComponent