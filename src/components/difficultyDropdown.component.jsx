import React from 'react';
import {useTranslation} from "react-i18next";
import {difficultyData} from '../data/difficulty.data'

const DifficultyDropdownComponent = (props) => {
    const {t} = useTranslation('common');

    return (
        <div className="form-group">
            <label htmlFor="difficultyDropdown">{t("difficulty.name")}</label>
            <div className="dropdown" id="difficultyDropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                    {t("difficulty."+props.difficulty)}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {
                        difficultyData.map(difficulty => {
                            return (
                                <li key={difficulty.id}><button className="dropdown-item" onClick={() => props.selectDifficulty(difficulty.id)}>{t("difficulty."+difficulty.id)}</button></li>
                            )
                        })
                    }
                </ul>
            </div>
            <small id="difficultyHelpBlock" className="form-text text-white">
                {t("difficulty.help")}
            </small>
        </div>
    )
}

export default DifficultyDropdownComponent
