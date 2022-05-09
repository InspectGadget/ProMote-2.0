import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";

export default function ResourceForm(){
    return(
        <Segment clearing>
            <Form>
                <Form.Input placeholder="Resource name" />
                <Form.Input placeholder="Resource login" />
                <Form.Input placeholder="Resource password" />
                <Form.Input placeholder="Resource link" />
                <Button floated="right" positive type="submit" content="Submit" />
                <Button floated="right" type="button" content="Cancel" />
            </Form>
        </Segment>
    )
}