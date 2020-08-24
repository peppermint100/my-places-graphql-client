import React from 'react'
import { Formik } from "formik"
import styles from "./LoginForm.module.css"
import ErrorText from '../ErrorText/ErrorText'

interface Props {
    toRegister: () => void
}

const LoginForm: React.FC<Props> = ({ toRegister }) => {
    return (
        <>
            <div className={styles.container}>
                <header className={styles.header}>LOGIN</header>
                <Formik initialValues={{ email: "", password: "" }} onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true)
                    console.log(data)
                    setSubmitting(false)
                }}>
                    {
                        ({ values, handleChange, handleSubmit, isSubmitting }) => (
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div>
                                    <input className={styles.input}
                                        placeholder="   Enter E-Mail"
                                        name="email"
                                        type="email"
                                        value={values.email}
                                        onChange={handleChange} />
                                </div>
                                <div>
                                    <input className={styles.input}
                                        placeholder="   Enter Password"
                                        name="password"
                                        type="password"
                                        value={values.password}
                                        onChange={handleChange} />
                                </div>
                                <div style={{ marginLeft: "10px" }}>
                                    <ErrorText text="Username Already Exist" />
                                </div>
                                <button className={styles.button} type="submit" disabled={isSubmitting}>LOGIN</button>
                            </form>
                        )
                    }
                </Formik>
                <p className={styles.helperText}>Don't have Account? <span onClick={toRegister}> SignUp</span></p>
            </div>
        </>
    )
}

export default LoginForm
