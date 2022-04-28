import React from "react"
import { useTranslation } from "react-i18next"
import ChallengeItemComponent from "../challenge-item/challenge-item.component"

const ChallengeWeaponTypeHandComponent = ({ side, hand }) => {
    const { t } = useTranslation([ "common", "weapon-types" ])

    return (
        <td>
            <p>{t("challenge." + side + "Hand")}</p>
            {
                hand.map(weaponType => {
                    return <ChallengeItemComponent key={weaponType.id} type={"weaponType"} item={weaponType} />
                })
            }
        </td>
    )
}

export default ChallengeWeaponTypeHandComponent