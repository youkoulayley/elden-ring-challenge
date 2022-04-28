import React from "react"
import { useTranslation } from "react-i18next"

const WelcomeComponent = () => {
    const { t } = useTranslation("common")

    return (
        <p className="text-center">
            {t("welcome")}
        </p>
    )
}

export default WelcomeComponent
