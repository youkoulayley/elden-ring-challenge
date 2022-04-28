import React from "react"
import { useTranslation } from "react-i18next"
import ChallengeItemComponent from "../challenge-item/challenge-item.component"

const ChallengeCrystalTearsComponent = ({ crystalTears }) => {
    const { t } = useTranslation([ "common", "crystalTear" ])

    const splitCrystalTears = () => {
        const middleIndex = Math.ceil(crystalTears.length / 2)

        const firstHalf = crystalTears.slice().splice(0, middleIndex)
        const secondHalf = crystalTears.slice().splice(-middleIndex)

        return {firstHalf, secondHalf}
    }

    return (
        <tr className={"text-start"}>
            <th scope="row">
                {t("challenge.crystalTears")}
            </th>
            <td>
                {
                    splitCrystalTears().firstHalf.map(crystalTear => {
                        return <ChallengeItemComponent key={crystalTear.id} type={"crystalTear"} item={crystalTear} />
                    })
                }
            </td>
        </tr>
    )
}

export default ChallengeCrystalTearsComponent