import React from 'react'
import { Formik } from "formik"
import styles from "./RegisterForm.module.css"

interface Props {
    toLogin: () => void
}
const RegisterForm: React.FC<Props> = ({ toLogin }) => {
    return (
        <>
            <div className={styles.container}>
                <header className={styles.header}>Sign-Up</header>
                <Formik initialValues={{ username: "", email: "", password: "" }} onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true)
                    console.log(data)
                    setSubmitting(false)
                }}>
                    {
                        ({ values, handleChange, handleSubmit, isSubmitting }) => (
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div>
                                    <input className={styles.input}
                                        placeholder="   Enter Username"
                                        name="username"
                                        type="text"
                                        value={values.username}
                                        onChange={handleChange} />
                                </div>
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
                                <button className={styles.button} type="submit" disabled={isSubmitting}>SIGN-UP</button>
                            </form>
                        )
                    }
                </Formik>
                <p className={styles.helperText}>Already Have an Account? <span onClick={toLogin}>Log-In</span></p>
            </div>
        </>
    )
}

export default RegisterForm

