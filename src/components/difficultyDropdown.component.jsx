import React from 'react';
import {useTranslation} from "react-i18next";
import {difficultyData} from '../data/difficulty.data'

const DifficultyDropdownComponent = (props) => {
    const {t} = useTranslation('common');

    return (
        <div className="form-group">
            <div className="input-group">
                <label className="input-group-text" htmlFor="inputGroupSelect01">{t("difficulty.name")}</label>
                <select className="form-select" id="inputGroupSelect01">
                    {
                        difficultyData.map(difficulty => {
                            return (
                                <option key={difficulty.id} onClick={() => props.selectDifficulty(difficulty.id)} value={difficulty.id}>{t("difficulty."+difficulty.id)}</option>
                            )
                        })
                    }
                </select>
            </div>
        </div>
    )
}

export default DifficultyDropdownComponent
