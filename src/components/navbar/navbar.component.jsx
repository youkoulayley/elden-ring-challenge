import i18next from "i18next"
import React from "react"
import { Button, Container, Navbar } from "react-bootstrap"

const NavbarComponent = () => {
    return (
        <Navbar bg={"light"}>
            <Container fluid={true}>
                <a href={"/"} className={"navbar-brand"}>
                    Elden Ring Challenge Randomizer
                </a>
                <div className={"d-flex"}>
                    <Button variant={"outline-light"} onClick={() => i18next.changeLanguage("fr")}>
                        <span className={"fi fi-fr"}/>
                    </Button>
                    <Button variant={"outline-light"} onClick={() => i18next.changeLanguage("en")}>
                        <span className={"fi fi-gb"}/>
                    </Button>
                </div>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent
