import React from 'react';
import {useTranslation} from "react-i18next";
import ClassComponent from "./class.component";
import SaveComponent from "./save.component";

const ChallengeComponent = ({savedChallenges, challenge, setSavedChallenge, removeSavedChallenge}) => {
    const {t} = useTranslation('common')

    return (
        <div id={"challenge-"+challenge.id} className="container-fluid text-center rounded-3 bg-light" style={{padding: "20px"}}>
            <div className="row">
                <h2>{t("challenge.title")}</h2>
                <p><em>{challenge.id}</em></p>
                <SaveComponent id={challenge.id} savedChallenges={savedChallenges} setSavedChallenge={setSavedChallenge} removeSavedChallenge={removeSavedChallenge}/>
            </div>
            <div className="row">
                <div className="col-3">
                    <h3>{t("challenge.class")}</h3>
                    <ClassComponent id={challenge.class.id} type="class" />
                </div>

                <div className="col-9" style={{position: "relative"}}>
                    <div className="container" id="list-constraints" style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                        <table className="table">
                            <tbody>
                            <tr className={"text-start"}>
                                <th className="align-middle w-25" scope="row">{t("challenge.keepsake")}</th>
                                <td className="align-middle w-25"><img style={{width: "75px", height: "75px"}} src={"/keepsake/"+challenge.keepsake.id+".png"} alt="keepsake" /></td>
                                <td className="align-middle w-25"><p>{t("keepsake."+ challenge.keepsake.id)}</p></td>
                            </tr>
                            <tr className={"text-start"}>
                                <th scope="row">{t("challenge.constraints")}</th>
                                <td colSpan="2">
                                    <ul>
                                        {
                                            challenge.constraints.map(constraint => {
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
                                            challenge.weaponTypes.left.map(weaponType => {
                                                return <li key={weaponType.id}>{t("weaponTypes."+weaponType.id)}</li>
                                            })
                                        }
                                    </ul>
                                </td>
                                <td>
                                    <p>{t("challenge.rightHand")}</p>
                                        <ul>
                                            {
                                                challenge.weaponTypes.right.map(weaponType => {
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
