import React from 'react';
import {useTranslation} from "react-i18next";

const ClassComponent = ({id, type}) => {
    const {t} = useTranslation('common');

    return (
        <div className="card text-white bg-secondary mb-3" style={{maxWidth: "18rem"}}>
            <img src={"/"+ type +"/"+id+".png"} className="card-img-top" alt={type} />
            <div className="card-header">{t(type +"."+ id)}</div>
        </div>
    )
}

export default ClassComponent
