import React from "react";
import { Header, Menu } from "semantic-ui-react";

export default function JobFilters(){
    return(
        <>
        <Menu vertical size="small" style={{width:'100%'}}>
            <Header icon='filter' attached color='teal' content="Type of job" />
            <Menu.Item content='All Jobs' />
            <Menu.Item content="I'm applied" />
        </Menu>
        <Menu vertical size="small" style={{width:'100%'}}>
            <Header icon='filter' attached color='teal' content="Category" />
            <Menu.Item content='SMM' />
            <Menu.Item content="SMO" />
            <Menu.Item content="Google ads" />
        </Menu>
        </>
    )
}