import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import styles from './Register.style'
import { Formik } from 'formik'
import { showMessage, hideMessage } from "react-native-flash-message";
import authErrorMessage from '../../utils/authErrorMessagesParser'

import auth from '@react-native-firebase/auth'
import * as yup from 'yup'

import Button from '../../components/Button'
import Input from '../../components/Input'


const initialFormValues = {
    email: '',
    password: '',
    repassword: '',
}

const Register = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    const handleBack = () => {
        navigation.goBack()
    }

    async function handleSignUp(formValues) {
        if (formValues.password !== formValues.repassword) {
            showMessage({
                message: 'Şifreler uyuşmuyor!',
                type: 'danger',
            })
            return;
        }
        try {
            setLoading(true)
            await auth()
                .createUserWithEmailAndPassword(formValues.email, formValues.password)
            showMessage({
                message: 'Kullanıcı başarıyla oluşturuldu.',
                type: 'success',
            })
            navigation.navigate('LoginPage')
            setLoading(false)
        } catch (err) {
            setLoading(false)
            showMessage({
                message: authErrorMessage(err.code),
                type: 'danger',
            })
        }
    }

    const signUpValidationSchema = yup.object().shape({
        email: yup
            .string()
            .email('Lütfen geçerli bir e-posta girin.')
            .required('E-posta adresi gerekli.'),
        password: yup
            .string()
            .min(6, ({ min }) => `Şifreniz en kısa ${min} haneli olabilir.`)
            .max(16, ({ max }) => `Şifreniz en uzun ${max} haneli olabilir.`)
            .required('Şifre gerekli.'),
        repassword: yup
            .string()
            .min(6, ({ min }) => `Şifreniz en kısa ${min} haneli olabilir.`)
            .max(16, ({ max }) => `Şifreniz en uzun ${max} haneli olabilir.`)
            .required('Şifre onayı gerekli.')
    })

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>codetalks</Text>
            <Formik
                validationSchema={signUpValidationSchema}
                initialValues={initialFormValues}
                onSubmit={handleSignUp}>
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
                        <Input
                            value={values.repassword}
                            onType={handleChange('repassword')}
                            placeholder="Şifrenizi tekrar giriniz..."
                            isSecure={true} />
                        {errors.repassword &&
                            <Text style={styles.error}>{errors.repassword}</Text>
                        }
                        <Button text="Kayıt ol" loading={loading} onPress={handleSubmit} />
                    </>
                )}
            </Formik>
            <Button text="Geri" theme="secondary" onPress={handleBack} />
        </SafeAreaView>
    )
}
export default Register;