import React from "react";
import { Link } from "react-router-dom";
import { Grid, Segment, Image, Header } from "semantic-ui-react";

export default function AnalysisHero() {
    return(
        <Segment>
            <Grid verticalAlign='middle' centered>
                <Grid.Column width={7} >
                    <Header size="huge" floated="right">Analyze your web pages</Header>
                    <Header as={Link} to='https://developers.google.com/speed'size="tiny" color="blue" floated="right" >Learn about Web Performance</Header>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Image src="/assets/analysis.svg" fluid />
                </Grid.Column>
            </Grid>
        </Segment>
    )
}