import { useEffect } from "react"
import Header from "../components/Header/Header"
import FormContainer from "../components/FormContainer/FormContainer"
import styles from "./../styles/Index.module.css"
import Footer from "../components/Footer/Footer"
import { useAuth } from "../lib/useAuth"
import Loading from "../components/Loading/Loading"
import Places from "../components/Places/Places"

export default function Index() {
    const { loading, data, error } = useAuth()

    return (
        <div>
            <header className={styles.top}>
                <Header />
            </header>
            <main className={styles.mainSection}>
                <section className={styles.map}></section>
                <section className={styles.auth}>
                    {loading ? <Loading /> : data.self ? <Places data={data.self} /> : <FormContainer />}
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
