import React, { useState } from 'react'
import styles from "./FormContainer.module.css"
import LoginForm from '../Login/LoginForm'
import RegisterForm from '../Register/ReigsterForm'

enum AuthState {
    LOGIN,
    REGISTER
}

const FormContainer: React.FC = () => {
    const [showing, setShowing] = useState<AuthState>(AuthState.LOGIN)

    return (
        <>
            {showing === AuthState.LOGIN
                ? <LoginForm toRegister={() => { setShowing(AuthState.REGISTER) }} />
                : <RegisterForm toLogin={() => { setShowing(AuthState.LOGIN) }} />
            }
        </>
    )
}

export default FormContainer
