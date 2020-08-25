import { useEffect } from "react"
import Header from "../components/Header/Header"
import FormContainer from "../components/FormContainer/FormContainer"
import styles from "./../styles/Index.module.css"
import Footer from "../components/Footer/Footer"
import { useQuery, useMutation } from "@apollo/client"
import { SELF_QUERY } from "../query/User/SelfQuery"
import cookie from "cookie"
import { HELLO_QUERY } from "../query/User/Hello"
import { LoginMutation } from "../query/User/LoginMutation"

export default function Index() {
    const result = useQuery(HELLO_QUERY)
    const { loading, data, error } = useQuery<any, any>(
        SELF_QUERY
    );

    if (error) console.log(" error : ", error)
    console.log(data)

    const [login, loginResult] = useMutation<
        any,
        any
    >(LoginMutation, {
        variables: { data: { email: "pepper@naver.com", password: "123123" } }
    });

    console.log('login Result: ', loginResult)

    return (
        <div>
            <header className={styles.top}>
                <Header />
            </header>
            <main className={styles.mainSection}>
                <section className={styles.map}></section>
                <section className={styles.auth}>
                    <FormContainer />
                </section>
            </main>
            <footer className={styles.bottom}>
                <Footer />
                <button onClick={() => {
                    login()
                }}>TEST</button>
            </footer>
        </div>
    )
}
