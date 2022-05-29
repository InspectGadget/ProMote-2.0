import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { Button, Checkbox, Header, Input } from "semantic-ui-react";
import MySelectInput from "../../common/form/MySelectInput";
import MyTextInput from "../../common/form/MyTextInput";
import { useStore } from "../../stores/store";

export default function TelegramFilterEditForm() {

    const { jobStore } = useStore();
    const { categories, loadRelatedObj} = jobStore;

    useEffect(() => {
        loadRelatedObj();
    }, [loadRelatedObj])

    const categoryOptions = categories.map(function (row) {
        return { text: row.title, value: row.title }
    })
    return(
        <Formik
            initialValues={{ displayName: '', bio: '', email:'' }}
            onSubmit={values => console.log(values)}
        >
            {({ handleSubmit }) => (
                <Form className="ui form" onSubmit={handleSubmit}>
                    <Header as='h4' content='Enter connected number'  textAlign='left' />
                    <MyTextInput placeholder="Phone number" name='phone' />
                    <Header as='h4' content='Chose category'  textAlign='left' />
                    <MySelectInput placeholder="Category" name='category' options={categoryOptions}/>
                    <Header as='h4' content='Set minimal salary'  textAlign='left' />
                    <MyTextInput placeholder="Salary" name='salary' />
                    <Header as='h4' content='Is active'  textAlign='left' />
                    <Checkbox toggle label="Active" />
                    <Button  positive content="Update" type="submit" floated="right" />
                </Form>
            )}
        </Formik>
    )
}