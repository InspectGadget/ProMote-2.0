import React from "react";
import { Grid, Header, Icon, Segment, Statistic, Table } from "semantic-ui-react";

export default function AnalysisResult() {
    return (
        <Segment>
            <Grid centered verticalAlign="middle">
                <Grid.Column width={16} >
                    <Header as='h3'>
                        <Icon name='balance scale' />
                        <Header.Content>Discover your real website optimization</Header.Content>
                    </Header>
                </Grid.Column>
                <Grid.Column width={13}>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Meta tag name</Table.HeaderCell>
                                <Table.HeaderCell>Status</Table.HeaderCell>
                                <Table.HeaderCell>Value</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row positive>
                                <Table.Cell>Title</Table.Cell>
                                <Table.Cell>
                                    Exist
                                    <Icon name='checkmark' />
                                </Table.Cell>
                                <Table.Cell>UTS</Table.Cell>
                            </Table.Row>
                            <Table.Row positive>
                                <Table.Cell>Description</Table.Cell>
                                <Table.Cell>
                                    Exist
                                    <Icon name='checkmark' />
                                </Table.Cell>
                                <Table.Cell>Чистка, ремонт та заправка картриджів у Львові...</Table.Cell>
                            </Table.Row>
                            <Table.Row negative>
                                <Table.Cell>Keywords</Table.Cell>
                                <Table.Cell>
                                    Does not exist
                                    <Icon name="close" />
                                </Table.Cell>
                                <Table.Cell>none</Table.Cell>
                            </Table.Row>
                            <Table.Row positive>
                                <Table.Cell>Open Graph Protocol</Table.Cell>
                                <Table.Cell>
                                    Exist
                                    <Icon name='checkmark' />
                                </Table.Cell>
                                <Table.Cell>Title: UTS, Site_name: Update Technology Systems ...</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Grid.Column>
                <Grid.Column width={13}>
                    <Header as='h4'>Performance</Header>
                    <Statistic color='yellow'>
                        <Statistic.Value>689</Statistic.Value>
                    </Statistic>
                    <span>ms - server response time.</span>
                </Grid.Column>
            </Grid>
        </Segment>
    )
}