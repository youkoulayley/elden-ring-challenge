import React from 'react';
import {useTranslation} from "react-i18next";
import ClassComponent from "./class.component";

const ChallengeComponent = (props) => {
    const {t} = useTranslation('common');

    return (
        <div className="container-fluid text-center rounded-3 bg-light" style={{padding: "20px"}}>
            <div className="row">
                <h2>{t("challenge.title")}</h2>
            </div>
            <div className="row">
                <div className="col-3">
                    <h3>{t("challenge.class")}</h3>
                    <ClassComponent id={props.challenge.class.id} type="class" />
                </div>
                <div className="col-9" style={{position: "relative"}}>
                    <div className="container" id="list-constraints" style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                        <table className="table">
                            <tbody>
                            <tr className={"text-start"}>
                                <th className="align-middle w-25" scope="row">{t("challenge.keepsake")}</th>
                                <td className="align-middle w-25"><img style={{width: "75px", height: "75px"}} src={"/keepsake/"+props.challenge.keepsake.id+".png"} alt="keepsake" /></td>
                                <td className="align-middle w-25"><p>{t("keepsake."+ props.challenge.keepsake.id)}</p></td>
                            </tr>
                            <tr className={"text-start"}>
                                <th scope="row">{t("challenge.constraints")}</th>
                                <td colSpan="2">
                                    <ul>
                                        {
                                            props.challenge.constraints.map(constraint => {
                                                return <li key={constraint.id}>{t("constraint."+constraint.id)}</li>
                                            })
                                        }
                                    </ul>
                                </td>
                            </tr>
                            <tr className={"text-start"}>
                                <th scope="row">{t("challenge.weaponTypes")}</th>
                                <td>
                                    <p>{t("challenge.leftHand")}</p>
                                    <ul>
                                        {
                                            props.challenge.weaponTypes.left.map(weaponType => {
                                                return <li key={weaponType.id}>{t("weaponTypes."+weaponType.id)}</li>
                                            })
                                        }
                                    </ul>
                                </td>
                                <td>
                                    <p>{t("challenge.rightHand")}</p>
                                        <ul>
                                            {
                                                props.challenge.weaponTypes.right.map(weaponType => {
                                                    return <li key={weaponType.id}>{t("weaponTypes."+weaponType.id)}</li>
                                                })
                                            }
                                        </ul>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChallengeComponent