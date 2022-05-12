import { Form, Formik } from "formik";
import React from "react";
import { Button, Grid, Input, Item, ItemContent, Segment } from "semantic-ui-react";
import MyTextInput from "../../common/form/MyTextInput";

export default function AnalysisHeader() {
    return (
        <Segment>
            <Grid centered verticalAlign="middle">
                <Grid.Column width={6}>
                    <Item>
                        <ItemContent>
                            <Formik
                                initialValues={{ link: '' }}
                                onSubmit={values => console.log(values)}
                            >
                                {({ handleSubmit }) => (
                                    <Form className="ui form" onSubmit={handleSubmit}>
                                        <Input action={{
                                            color: 'teal',
                                            content: 'Analyze',
                                        }} placeholder='Paste your link' />
                                    </Form>
                                )}
                            </Formik>
                        </ItemContent>
                    </Item>
                </Grid.Column>
            </Grid>
        </Segment>
    )
}