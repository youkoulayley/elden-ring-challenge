import React from "react"
import { useTranslation } from "react-i18next"

const ChallengeItemComponent = ({ type, item }) => {
    const { t } = useTranslation([ "common", type ])

    return (
        <div key={type + "-" + item.name + "-" + item.id}>
            <img className={"item"}
                src={"/" + type + "/" + item.id + ".png"}
                alt={item.name}
                width={50} />
            {t(type + ":" + item.id)}
        </div>
    )
}

export default ChallengeItemComponent