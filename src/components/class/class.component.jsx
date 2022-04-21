import React from "react"
import { Card } from "react-bootstrap"
import { useTranslation } from "react-i18next"

const ClassComponent = ({ id }) => {
    const { t } = useTranslation("common")

    return (
        <Card className={"class text-white mb-3"} bg={"secondary"}>
            <img src={"/class/" + id + ".png"} className={"card-img-top"} alt={"class image"} />
            <Card.Header>{t("class." + id)}</Card.Header>
        </Card>
    )
}

export default ClassComponent
