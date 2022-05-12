import { Form, Formik } from "formik";
import React from "react";
import { Button, Header } from "semantic-ui-react";
import MyTextArea from "../../common/form/MyTextArea";
import MyTextInput from "../../common/form/MyTextInput";

export default function CompanyEditForm() {
    return (
        <Formik
            initialValues={{ name: '', bio: '', email:'' }}
            onSubmit={values => console.log(values)}
        >
            {({ handleSubmit }) => (
                <Form className="ui form" onSubmit={handleSubmit}>
                    <MyTextInput name="name" placeholder="Company name" />
                    <MyTextArea name="description" placeholder="Description" rows={4} />
                    <MyTextInput name="address" placeholder="Address" />
                    <MyTextInput name="phone" placeholder="Phone" />
                    <MyTextInput name="link" placeholder="Link" />
                    <Header as='h4' content='Upload photo'  textAlign='left' />
                    <Button
                        content="Choose File"
                        labelPosition="left"
                        icon="file"
                    />
                    <Button  positive content="Update" type="submit" floated="right" />
                </Form>
            )}
        </Formik>
    )
}