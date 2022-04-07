import React from 'react';
import {useTranslation} from "react-i18next";
import DifficultyDropdownComponent from "./difficultyDropdown.component";

const FormGenerateComponent = (props) => {
    const {t} = useTranslation('common');

    return (
        <div className="row align-items-center justify-content-md-center rounded-3 bg-secondary text-white" style={{padding: "20px"}}>
            <div className="col-auto">
                <DifficultyDropdownComponent selectDifficulty={props.selectDifficulty} difficulty={props.difficulty} />
            </div>

            <div className="col-auto">
                <button className="btn btn-success" onClick={() => props.generateChallenge(props.difficulty)}>
                    <i className="bi bi-shuffle" />
                    {t("generate")}
                </button>
            </div>
        </div>
    )
}

export default FormGenerateComponent