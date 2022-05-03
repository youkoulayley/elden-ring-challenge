import React from "react"
import { useTranslation } from "react-i18next"

const ChallengeConstraintsComponent = ({ constraints }) => {
    const { t } = useTranslation([ "common", "constraint" ])

    return (
        <tr className={"text-start"}>
            <th scope="row">
                {t("challenge.constraints")}
            </th>
            <td colSpan={2}>
                <ul>
                    {
                        constraints.map(constraint => {
                            return <li key={"constraint-" + constraint.id}>{t("constraint:" + constraint.id)}</li>
                        })
                    }
                </ul>
            </td>
        </tr>
    )
}

export default ChallengeConstraintsComponent