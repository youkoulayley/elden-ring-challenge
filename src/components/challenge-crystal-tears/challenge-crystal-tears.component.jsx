import React from "react"
import { useTranslation } from "react-i18next"

const ChallengeCrystalTearsComponent = ({ crystalTears }) => {
    const { t } = useTranslation([ "common", "crystalTear" ])

    return (
        <tr className={"text-start"}>
            <th scope="row">
                {t("challenge.crystalTears")}
            </th>
            <td colSpan={2}>
                {
                    crystalTears.map(crystalTear => {
                        return <div key={crystalTear.id}>
                            <img className={"crystal tear"}
                                src={"/crystal-tear/" + crystalTear.id + ".png"}
                                alt="crystal tear"
                                width={50} />
                            {t("crystalTear:" + crystalTear.id)}
                        </div>
                    })
                }
            </td>
        </tr>
    )
}

export default ChallengeCrystalTearsComponent