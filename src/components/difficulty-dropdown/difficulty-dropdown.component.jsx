import React from "react"
import { FormGroup, FormSelect, InputGroup } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { difficultyData } from "../../data/difficulty.data"

const DifficultyDropdownComponent = ({setDifficulty}) => {
    const {t} = useTranslation("common")

    return (
        <FormGroup>
            <InputGroup>
                <InputGroup.Text>{t("difficulty.name")}</InputGroup.Text>
                <FormSelect>
                    {
                        difficultyData.map(difficulty => {
                            return (
                                <option key={difficulty.id}
                                    onClick={() => setDifficulty(difficulty.id)}
                                    value={difficulty.id}
                                >
                                    {t("difficulty." + difficulty.id)}
                                </option>
                            )
                        })
                    }
                </FormSelect>
            </InputGroup>
        </FormGroup>
    )
}

export default DifficultyDropdownComponent
