import React from 'react';
import PropTypes from 'prop-types';
import { Alignment, Button, Navbar } from "@blueprintjs/core/";
import '../style/style.scss';

const headerModule = ({ }) => (
  <div>
    <Navbar className="bp3-dark">
    <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Netcompany</Navbar.Heading>
        <Navbar.Divider />
        <Button className="bp3-minimal" icon="home" text="Home" />
        <Button className="bp3-minimal" icon="document" text="Files" />
    </Navbar.Group>
    </Navbar>
  </div>
);

headerModule.propTypes = {

};

headerModule.defaultProps = {

};

export default headerModule;

