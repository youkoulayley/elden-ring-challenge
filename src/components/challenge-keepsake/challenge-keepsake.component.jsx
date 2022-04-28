import React from "react"
import { useTranslation } from "react-i18next"
import ChallengeItemComponent from "../challenge-item/challenge-item.component"

const ChallengeKeepsakeComponent = ({ keepsake }) => {
    const { t } = useTranslation([ "common", "keepsake" ])

    return (
        <tr className={"text-start"}>
            <th className="align-middle w-30" scope="row">
                {t("challenge.keepsake")}
            </th>
            <td colSpan={2}>
                <ChallengeItemComponent key={keepsake.id} type={"keepsake"} item={keepsake} />
            </td>
        </tr>
    )
}

export default ChallengeKeepsakeComponent
