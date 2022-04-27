import React from "react"
import { useTranslation } from "react-i18next"
import "./challenge-keepsake.styles.scss"

const ChallengeKeepsakeComponent = ({ keepsake }) => {
    const { t } = useTranslation([ "common", "keepsake" ])

    return (
        <tr className={"text-start"}>
            <th className="align-middle w-30" scope="row">
                {t("challenge.keepsake")}
            </th>
            <td colSpan={2}>
                <img className={"keepsake"} src={"/keepsake/" + keepsake.id + ".png"}
                    alt="keepsake"
                    width={30} />
                {t("keepsake:" + keepsake.id)}
            </td>
        </tr>
    )
}

export default ChallengeKeepsakeComponent