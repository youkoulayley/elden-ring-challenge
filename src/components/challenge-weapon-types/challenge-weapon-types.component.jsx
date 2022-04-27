import React from "react"
import { useTranslation } from "react-i18next"
import ChallengeWeaponTypeHandComponent from "../challenge-weapon-type-hand/challenge-weapon-type-hand.component"

const ChallengeWeaponTypesComponent = ({ weaponTypes }) => {
    const { t } = useTranslation([ "common", "weapon-types" ])

    return (
        <tr className={"text-start"}>
            <th scope="row">
                {t("challenge.weaponTypes")}
            </th>

            <ChallengeWeaponTypeHandComponent side={"left"} hand={weaponTypes.left} />
            <ChallengeWeaponTypeHandComponent side={"right"} hand={weaponTypes.right} />
        </tr>
    )
}

export default ChallengeWeaponTypesComponent