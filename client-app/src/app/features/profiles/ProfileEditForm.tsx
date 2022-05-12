import { Form, Formik } from "formik";
import React from "react";
import { Button, Header } from "semantic-ui-react";
import MyTextArea from "../../common/form/MyTextArea";
import MyTextInput from "../../common/form/MyTextInput";

export default function ProfileEditForm() {
    return (
        <Formik
            initialValues={{ displayName: '', bio: '', email:'' }}
            onSubmit={values => console.log(values)}
        >
            {({ handleSubmit }) => (
                <Form className="ui form" onSubmit={handleSubmit}>
                    <MyTextInput name="displayName" placeholder="Display name" />
                    <MyTextInput name="email" placeholder="Email" />
                    <MyTextArea name="bio" placeholder="Bio" rows={4} />

                    <Header as='h4' content='Upload photo'  textAlign='left' />
                    <Button
                        content="Choose File"
                        labelPosition="left"
                        icon="file"
                    />
                    <Button  positive content="Update profile" type="submit" floated="right" />
                </Form>
            )}
        </Formik>
    )
}