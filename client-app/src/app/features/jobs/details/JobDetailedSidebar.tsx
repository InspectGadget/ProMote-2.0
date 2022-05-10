import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { Item, Label, List, Segment, Image } from "semantic-ui-react";

export default observer(function JobDetailedSidebar() {
    return (
        <>
            <Segment
                textAlign="center"
                style={{ border: 'none' }}
                attached='top'
                secondary
                inverted
                color="teal"
            >
                3 People Applayed
            </Segment>
            <Segment attached>
                <List relaxed divided>
                    <Item style={{position:'relative'}}>
                        <Label
                        style={{position:'absolute'}}
                        color='orange'
                        ribbon='right'
                        >
                            Employed
                        </Label>
                        <Image size='tiny' src={'/assets/userImages/bob.jpg'} />
                        <Item.Content verticalAlign="middle">
                            <Item.Header as='h3'>
                                <Link to={`#`}>Bob</Link>
                            </Item.Header>
                        </Item.Content>
                    </Item>
                    <Item style={{position:'relative'}}>
                        <Image size='tiny' src={'/assets/userImages/bob.jpg'} />
                        <Item.Content verticalAlign="middle">
                            <Item.Header as='h3'>
                                <Link to={`#`}>Tom</Link>
                            </Item.Header>
                        </Item.Content>
                    </Item>
                    <Item style={{position:'relative'}}>
                        <Image size='tiny' src={'/assets/userImages/bob.jpg'} />
                        <Item.Content verticalAlign="middle">
                            <Item.Header as='h3'>
                                <Link to={`#`}>Harry</Link>
                            </Item.Header>
                        </Item.Content>
                    </Item>
                </List>
            </Segment>
        </>
    )
})