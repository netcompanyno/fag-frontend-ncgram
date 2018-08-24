import React from 'react';
import { Alignment, Button, Navbar } from "@blueprintjs/core/";
import { Link } from "react-router-dom";

const headerModule = () => (
    <div className="header_text_colour">
        <Navbar className="header_background_colour">
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>Netcompany</Navbar.Heading>
                <Navbar.Divider />
                <Button className="bp3-minimal header_text_colour " icon="home">
                    <Link className={'link-header'}
                          to={"/"}>
                        Hjem
                    </Link>
                </Button>

            </Navbar.Group>
        </Navbar>
    </div>
);

export default headerModule;
