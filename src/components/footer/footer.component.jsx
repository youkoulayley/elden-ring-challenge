import React from "react"
import { Col, ListGroup, Row } from "react-bootstrap"
import "./footer.styles.scss"

const FooterComponent = () => {
    return (
        <footer className={"page-footer font-small blue pt-4 bg-dark text-white"}>
            <Row>
                <Col md={6}>
                    <ListGroup horizontal className={"float-start"}>
                        <ListGroup.Item className={"li-inline"}>
                            <span className={"text-white"}><i>© Youkoulayley</i></span>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={6}>
                    <ListGroup horizontal className={"float-end"}>
                        <ListGroup.Item className={"li-inline"}>
                            <a href={"https://github.com/youkoulayley/elden-ring-challenge"}>
                                <i className={"bi bi-github"}/>
                            </a>
                        </ListGroup.Item>
                        <ListGroup.Item className={"li-inline"}>
                            <a href={"https://www.buymeacoffee.com/bmayellebuR"}>
                                <img src={"https://cdn.buymeacoffee.com/buttons/default-orange.png"}
                                    alt={"Buy Me A Coffee"} height={"41"} width={"174"}/>
                            </a>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </footer>
    )
}

export default FooterComponent
