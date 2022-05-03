import React from "react"
import { useTranslation } from "react-i18next"
import ChallengeItemComponent from "../challenge-item/challenge-item.component"

const ChallengeTalismansComponent = ({ talismans }) => {
    const { t } = useTranslation([ "common", "talisman" ])

    const splitTalismans = () => {
        const middleIndex = Math.ceil(talismans.length / 2)

        const firstHalf = talismans.slice().splice(0, middleIndex)
        const secondHalf = talismans.slice().splice(-middleIndex)

        return {firstHalf, secondHalf}
    }

    return (
        <tr className={"text-start"}>
            <th scope="row">
                {t("challenge.talismans")}
            </th>
            <td>
                {
                    splitTalismans().firstHalf.map(talisman => {
                        return <ChallengeItemComponent key={talisman.id} type={"talisman"} item={talisman} />
                    })
                }
            </td>
            <td>
                {
                    splitTalismans().secondHalf.map(talisman => {
                        return <ChallengeItemComponent key={talisman.id} type={"talisman"} item={talisman} />
                    })
                }
            </td>
        </tr>
    )
}

export default ChallengeTalismansComponent