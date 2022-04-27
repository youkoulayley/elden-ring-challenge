import React from "react"
import { useTranslation } from "react-i18next"

const ChallengeWeaponTypeHandComponent = ({ side, hand }) => {
    const { t } = useTranslation([ "common", "weapon-types" ])

    return (
        <td>
            <p>{t("challenge." + side + "Hand")}</p>
            {
                hand.map(weaponType => {
                    return <div key={weaponType.id}>
                        <img className={"weapon type"}
                            src={"/weapon-type/" + weaponType.id + ".png"}
                            alt="weapon type"
                            width={50} />
                        {t("weaponType:" + weaponType.id)}
                    </div>
                })
            }
        </td>
    )
}

export default ChallengeWeaponTypeHandComponent