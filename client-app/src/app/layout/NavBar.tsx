import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";

export default function NavBar() {

    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: 10 }} />
                    ProMote
                </Menu.Item>
                <Menu.Item as={NavLink} to='/jobs' name="Jobs"></Menu.Item>
                <Menu.Item name="Analysis"></Menu.Item>
                <Menu.Item>
                    <Button as={NavLink} to='/createJob' positive content='Create Job' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}