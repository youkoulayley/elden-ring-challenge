import React, { useState } from "react"
import { Button, Col, Row } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import DifficultyDropdownComponent from "../difficulty-dropdown/difficulty-dropdown.component"
import "./form-challenge.styles.scss"

const FormChallengeComponent = ({newChallenge, searchChallenge}) => {
    const {t} = useTranslation("common")

    const [ difficulty, setDifficulty ] = useState(1)
    const [ id, setID ] = useState("")

    return (
        <Row
            className={"form-challenge align-items-center justify-content-md-center rounded-3 text-white bg-secondary"}>
            <Col md={"auto"}>
                <DifficultyDropdownComponent setDifficulty={setDifficulty}/>
            </Col>

            <Col md={"auto"}>
                <Button variant={"success"}
                    onClick={() => newChallenge(difficulty)}
                >
                    <i className="bi bi-shuffle"/>
                    {t("generate")}
                </Button>
            </Col>

            <Col md={"auto"}>
                <span className="lead">
                    {t("or")}
                </span>
            </Col>

            <Col md={"auto"}>
                <input onChange={(e) => setID(e.target.value)}
                    className="form-control"
                    placeholder={t("searchPlaceholder")}
                />
            </Col>

            <Col md={"auto"}>
                <Button variant={"success"}
                    onClick={() => searchChallenge(id)}
                >
                    <i className="bi bi-search"/>
                    {t("search")}
                </Button>
            </Col>
        </Row>
    )
}

export default FormChallengeComponent
