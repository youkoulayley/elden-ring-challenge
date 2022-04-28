import React from "react"
import { useTranslation } from "react-i18next"
import "./waiting.styles.scss"

const WaitingComponent = () => {
    const { t } = useTranslation("common")

    return (
        <div className={"waiting align-middle text-center rounded-3 bg-light"}>
            <p>{t("challenge.waiting")}</p>
        </div>
    )
}

export default WaitingComponent
