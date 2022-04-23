import React from "react"
import { FormGroup, FormSelect, InputGroup } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { difficultyData } from "../../data/difficulty.data"

const DifficultyDropdownComponent = ({ setDifficulty }) => {
    const { t } = useTranslation("difficulty")

    return (
        <FormGroup>
            <InputGroup>
                <InputGroup.Text>{t("name")}</InputGroup.Text>
                <FormSelect onChange={(e) => {
                    setDifficulty(e.target.value)
                }}>
                    {
                        difficultyData.map(difficulty => {
                            return (
                                <option key={difficulty.id}
                                    value={difficulty.id}
                                >
                                    {t(difficulty.id)}
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
