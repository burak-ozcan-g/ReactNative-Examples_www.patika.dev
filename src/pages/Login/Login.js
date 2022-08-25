import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import styles from './Login.style'
import { Formik } from 'formik'
import { showMessage } from "react-native-flash-message";
import authErrorMessage from '../../utils/authErrorMessagesParser'

import * as yup from 'yup'
import auth from '@react-native-firebase/auth'

import Button from '../../components/Button'
import Input from '../../components/Input'


const initialFormValues = {
    email: '',
    password: '',
}

const Login = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    const handleSignUp = () => {
        navigation.navigate('RegisterPage')
    }
    async function handleLogin(formValues) {
        try {
            setLoading(true);
            await auth()
                .signInWithEmailAndPassword(formValues.email, formValues.password)
            showMessage({
                message: 'Başarıyla giriş yapıldı.',
                type: 'success',
            })
            setLoading(false);
        } catch (err) {
            setLoading(false);
            showMessage({
                message: authErrorMessage(err.code),
                type: "danger",
            });
        }
    }

    const loginValidationSchema = yup.object().shape({
        email: yup
            .string()
            .email('Lütfen geçerli bir e-posta girin.')
            .required('E-posta adresi gerekli.'),
        password: yup
            .string()
            .required('Şifre gerekli.'),
    })

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>codetalks</Text>
            <Formik
                validationSchema={loginValidationSchema}
                initialValues={initialFormValues}
                onSubmit={handleLogin}>
                {({ values, handleChange, handleSubmit, errors }) => (
                    <>
                        <Input
                            value={values.email}
                            onType={handleChange('email')}
                            placeholder="E-postanızı giriniz..." />
                        {errors.email &&
                            <Text style={styles.error}>{errors.email}</Text>
                        }
                        <Input
                            value={values.password}
                            onType={handleChange('password')}
                            placeholder="Şifrenizi giriniz..."
                            isSecure={true} />
                        {errors.password &&
                            <Text style={styles.error}>{errors.password}</Text>
                        }
                        <Button text="Giriş yap" onPress={handleSubmit} loading={loading} />
                    </>
                )}
            </Formik>
            <Button text="Kayıt ol" theme="secondary" onPress={handleSignUp} />
        </SafeAreaView >
    )
}
export default Login;