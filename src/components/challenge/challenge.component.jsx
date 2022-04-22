import React from "react"
import { Col, Container, Row, Table } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import ClassComponent from "../class/class.component"
import SaveComponent from "../save/save.component"
import "./challenge.styles.scss"

const ChallengeComponent = ({savedChallenges, challenge, setSavedChallenge, removeSavedChallenge}) => {
    const {t} = useTranslation([ "common", "constraint", "keepsake", "weapon-types" ])

    return (
        <Container id={"challenge-" + challenge.id} className={"challenge text-center rounded-3 bg-light"} fluid>
            <Row>
                <h2>{t("challenge.title")}</h2>
                <p><em>{challenge.id}</em></p>
                <SaveComponent id={challenge.id} savedChallenges={savedChallenges} setSavedChallenge={setSavedChallenge}
                    removeSavedChallenge={removeSavedChallenge}/>
            </Row>
            <Row>
                <Col md={3}>
                    <h3>{t("challenge.class")}</h3>
                    <ClassComponent id={challenge.class.id}/>
                </Col>

                <Col md={9} className={"right-column"}>
                    <Container>
                        <Table>
                            <tbody>
                                <tr className={"text-start"}>
                                    <th scope="row">
                                        {t("challenge.constraints")}
                                    </th>
                                    <td colSpan="2">
                                        <ul>
                                            {
                                                challenge.constraints.map(constraint => {
                                                    return <li key={constraint.id}>{t("constraint:" + constraint.id)}</li>
                                                })
                                            }
                                        </ul>
                                    </td>
                                </tr>
                                <tr className={"text-start"}>
                                    <th className="align-middle w-30" scope="row">
                                        {t("challenge.keepsake")}
                                    </th>
                                    <td colSpan={2}>
                                        <img className={"keepsake"} src={"/keepsake/" + challenge.keepsake.id + ".png"}
                                            alt="keepsake"
                                            width={30}/>
                                        {t("keepsake:" + challenge.keepsake.id)}
                                    </td>
                                </tr>
                                <tr className={"text-start"}>
                                    <th scope="row">
                                        {t("challenge.crystalTears")}
                                    </th>
                                    <td colSpan={2}>
                                        {
                                            challenge.crystalTears.map(crystalTear => {
                                                return <div key={crystalTear.id}>
                                                    <img className={"crystal tear"}
                                                        src={"/crystal-tear/" + crystalTear.id + ".png"}
                                                        alt="crystal tear"
                                                        width={50}/>
                                                    {t("crystalTear:" + crystalTear.id)}
                                                </div>
                                            })
                                        }
                                    </td>
                                </tr>
                                <tr className={"text-start"}>
                                    <th scope="row">
                                        {t("challenge.weaponTypes")}
                                    </th>
                                    <td>
                                        <p>{t("challenge.leftHand")}</p>
                                        {
                                            challenge.weaponTypes.left.map(weaponType => {
                                                return <div key={weaponType.id}>
                                                    <img className={"weapon type"}
                                                        src={"/weapon-type/" + weaponType.id + ".png"}
                                                        alt="weapon type"
                                                        width={50}/>
                                                    {t("weaponType:" + weaponType.id)}
                                                </div>
                                            })
                                        }
                                    </td>
                                    <td>
                                        <p>{t("challenge.rightHand")}</p>
                                        {
                                            challenge.weaponTypes.right.map(weaponType => {
                                                return <div key={weaponType.id}>
                                                    <img className={"weapon type"}
                                                        src={"/weapon-type/" + weaponType.id + ".png"}
                                                        alt="weapon type"
                                                        width={50}/>
                                                    {t("weaponType:" + weaponType.id)}
                                                </div>
                                            })
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default ChallengeComponent
