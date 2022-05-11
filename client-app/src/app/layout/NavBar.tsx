import { observer } from "mobx-react-lite";
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, Container, Dropdown, Image, Menu } from "semantic-ui-react";
import { text } from "stream/consumers";
import { useStore } from "../stores/store";

export default observer(function NavBar() {

    const navigate = useNavigate();

    const { userStore: { user, logout } } = useStore();
    function funcLogOut(){
        logout();
        navigate('/');
    }
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
                <Menu.Item position="right">
                    <Image src={user?.image || '/assets/user.png'} avatar spaced='right' />
                    <Dropdown pointing='top left' text={user?.displayName}>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to={`profile/${user?.username}`} text='My profile' icon='user' />
                            <Dropdown.Item onClick={funcLogOut} text='Logout' icon='power' />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Container>
        </Menu>
    )
})