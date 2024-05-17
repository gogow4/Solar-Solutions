import styles from "./White.module.css"
export default function White() {
    return (
        <div className={styles.a}>
            <div className={styles.a1}>
                <p>Our Services</p>
                <h1>What We Do</h1>
            </div>
            <div className={styles.a2}>
                <div className={styles.b1}>
                    <div className={styles.c1}>
                        <h1>Solar Solutions</h1>
                        <p>Harness the power of the sun and embrace clean, renewable energy with our solar solutions.</p>
                    </div>
                    <div className={styles.c1}>
                        <h1>Cable Services</h1>
                        <p>Stay connected with high-quality cable services that deliver reliable and fast internet, television</p>
                    </div>
                </div>
                <div className={styles.b2}></div>
                <div className={styles.b1}>
                    <div className={styles.c1}>
                        <h1>Deals and Promotions</h1>
                        <p>We pride ourselves on securing great deals and promotions for our customers.</p>
                    </div>
                    <div className={styles.c1}>
                        <h1>Consultation and Support</h1>
                        <p>We understand that navigating the solar and cable landscape can be overwhelming.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}