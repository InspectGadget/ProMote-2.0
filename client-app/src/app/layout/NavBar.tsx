import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import { useStore } from "../stores/store";

export default function NavBar() {

    const { jobStore } = useStore();

    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: 10 }} />
                    ProMote
                </Menu.Item>
                <Menu.Item name="Jobs"></Menu.Item>
                <Menu.Item name="Analysis"></Menu.Item>
                <Menu.Item>
                    <Button onClick={() => jobStore.openForm()} positive content='Create Job' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}