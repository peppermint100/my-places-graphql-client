import Header from "../components/Header/Header"
import FormContainer from "../components/FormContainer/FormContainer"
import styles from "./../styles/Index.module.css"
import Footer from "../components/Footer/Footer"

export default function Index() {

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
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
