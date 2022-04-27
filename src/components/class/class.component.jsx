import React from "react"
import { Card } from "react-bootstrap"
import { useTranslation } from "react-i18next"

const ClassComponent = ({ id }) => {
    const { t } = useTranslation("class")

    return (
        <>
            <h3>{t("challenge.class")}</h3>
            <Card className={"class text-white mb-3"} bg={"secondary"}>
                <img src={"/class/" + id + ".png"} className={"card-img-top"} alt={"class image"} />
                <Card.Header>{t(id)}</Card.Header>
            </Card>
        </>
    )
}

export default ClassComponent
