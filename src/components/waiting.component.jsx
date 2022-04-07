import React from 'react';
import {useTranslation} from "react-i18next";

const WaitingComponent = () => {
    const {t} = useTranslation('common');

    return (
        <div className={"align-middle text-center rounded-3 bg-light"} style={{padding: "20px"}}>
            <p>{t("challenge.waiting")}</p>
        </div>
    )
}

export default WaitingComponent
