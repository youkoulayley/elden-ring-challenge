import React from "react"
import { Col, Container, Row, Table } from "react-bootstrap"
import ChallengeConstraintsComponent from "../challenge-constraints/challenge-constraints.component"
import ChallengeCrystalTearsComponent from "../challenge-crystal-tears/challenge-crystal-tears.component"
import ChallengeKeepsakeComponent from "../challenge-keepsake/challenge-keepsake.component"
import ChallengeWeaponTypesComponent from "../challenge-weapon-types/challenge-weapon-types.component"
import ClassComponent from "../class/class.component"
import "./challenge-body.styles.scss"

const ChallengeBodyComponent = ({challenge}) => {
    return (
        <Row>
            <Col md={3}>
                <ClassComponent id={challenge.class.id} />
            </Col>

            <Col md={9} className={"right-column"}>
                <Container>
                    <Table>
                        <tbody>
                            <ChallengeConstraintsComponent constraints={challenge.constraints} />
                            <ChallengeKeepsakeComponent keepsake={challenge.keepsake} />
                            {
                                challenge.crystalTears.length === 0 ?
                                    <></>
                                    :
                                    <ChallengeCrystalTearsComponent crystalTears={challenge.crystalTears}/>
                            }
                            <ChallengeWeaponTypesComponent weaponTypes={challenge.weaponTypes} />
                        </tbody>
                    </Table>
                </Container>
            </Col>
        </Row>
    )
}

export default ChallengeBodyComponent