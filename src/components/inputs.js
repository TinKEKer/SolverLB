import React, {useContext} from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import {Context} from "../utils/reducer";
import Grid from "@material-ui/core/Grid";


function Inputs() {

    const [state,dispatch] = useContext(Context)
    return (
        <Formik
            initialValues={{
                n: '',
                re: '',
                pe:''
            }}
            validate={values =>{
                const erros = {}
                if(values.n===''){
                    erros.n='Required'
                }
                if(!values.re===''){
                    erros.re='Required'
                }
                if(!values.pe===''){
                    erros.pe="Required"
                }
                return erros;
            }}
            onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    dispatch({
                        type:'Add_Values',
                        payload:values
                    })

            }}
        >
            {({ submitForm, isSubmitting }) => (
                <Form>
                    <Grid container justify={'center'} style={{
                        paddingTop:'20px'
                    }}>
                        <Grid item xs={3}>
                    <Field
                        component={TextField}
                        name="n"
                        type="number"
                        label="n"
                        variant="outlined"
                    />
                        </Grid>
                        <Grid item xs={3} >
                    <Field
                        component={TextField}
                        type="number"
                        label="re"
                        name="re"
                        variant="outlined"
                    />
                        </Grid>
                            <Grid item xs={3}>
                    <Field
                        component={TextField}
                        type="number"
                        label="pe"
                        name="pe"
                        variant="outlined"
                    />
                            </Grid>
                    </Grid>
                    {isSubmitting && <LinearProgress />}
                    <br />
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                        onClick={submitForm}
                        fullWidth={true}
                        style={{
                            marginBottom:'20px'
                        }}
                    >
                        Add Values
                    </Button>
                </Form>
            )}
        </Formik>
    );
}

export default Inputs