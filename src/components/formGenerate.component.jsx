import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import DifficultyDropdownComponent from "./difficultyDropdown.component";

const FormGenerateComponent = (props) => {
    const {t} = useTranslation('common');

    const [id, setID] = useState("")

    return (
        <div className="row align-items-center justify-content-md-center rounded-3 bg-secondary text-white" style={{padding: "20px"}}>
            <div className="col-auto">
                <DifficultyDropdownComponent selectDifficulty={props.selectDifficulty} difficulty={props.difficulty} />
            </div>

            <div className="col-auto">
                <button className="btn btn-success" onClick={() => props.newChallenge(props.difficulty)}>
                    <i className="bi bi-shuffle" />
                    {t("generate")}
                </button>
            </div>

            <div className="col-auto">
                <span className="lead">
                    {t("or")}
                </span>
            </div>

            <div className="col-auto">
                <input type="challengeId"
                       onChange={(e) => setID(e.target.value)}
                       className="form-control"
                       id="challengeId"
                       placeholder={t("searchPlaceholder")}
                />
            </div>

            <div className="col-auto">
                <button className="btn btn-success" onClick={() => props.generateChallenge(id)}>
                    <i className="bi bi-search" />
                    {t("search")}
                </button>
            </div>
        </div>
    )
}

export default FormGenerateComponent
