import { ErrorMessage, Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Header, Label } from "semantic-ui-react";
import MyTextInput from "../../common/form/MyTextInput";
import { useStore } from "../../stores/store";
import * as Yup from "yup";
import ValidationErrors from "../errors/ValidationErrors";

export default observer( function RegisterForm() {
    const navigate = useNavigate();

    const {userStore} = useStore();
    function check() {
        if(userStore.isLoggedIn) navigate('/jobs');
    }

    return (
        <Formik
            initialValues={{ displayName:'', username:'', email: '', password: '', error: null }}
            onSubmit={(values, {setErrors}) => {
                userStore.register(values).catch(error => setErrors({error})).then(check);
            }}
            validationSchema = {Yup.object({
                displayName: Yup.string().required(),
                username: Yup.string().required(),
                email: Yup.string().required().email(),
                password: Yup.string().required(),
            })}
        >
            {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
                <Form className="ui form error" onSubmit={handleSubmit}>
                    <Header as='h2' content='Sign up to ProMote' color='teal' textAlign='center' />
                    <MyTextInput name="displayName" placeholder="Display Name" />
                    <MyTextInput name="username" placeholder="Username" />
                    <MyTextInput name="email" placeholder="Email" />
                    <MyTextInput name="password" placeholder="Password" type="password" />
                    <ErrorMessage 
                        name="error" render={() => 
                        <ValidationErrors errors={errors.error} />}
                    />
                    <Button disabled={!isValid || !dirty} loading={isSubmitting} positive content="Register" type="submit" fluid />
                </Form>
            )}
        </Formik>
    )
})