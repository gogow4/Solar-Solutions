import styles from "./Info.module.css"
export default function Info() {
    return (
        <div className={styles.a}>
            <div className={styles.a1}>
                <h1>Our Expertise and Experience</h1>
            </div>
            <div className={styles.a2}>
                <div className={styles.b1}>
                    <div className={styles.b11}>
                        <h3>Solar Solutions</h3>
                        <p>Harness the power of the sun and embrace clean, renewable energy with our solar solutions.</p>
                    </div>
                </div>
                <div className={styles.b2}>
                    <div className={styles.b12}>
                        <h3>Cable Services </h3>
                        <p>Stay connected with high-quality cable services that deliver reliable and fast internet, television</p>
                    </div>
                </div>
                <div className={styles.b3}>
                    <div className={styles.b13}>
                        <h3>Internet Solutions</h3>
                        <p>From fast broadband to fiber-optic connections, we'll help you find the internet service provider</p>
                    </div>
                </div>
                <div className={styles.b4}>
                    <div className={styles.b14}>
                        <h3>Phone Services</h3>
                        <p>Discover cost-effective and feature-rich phone services that keep you connected to your loved ones</p>
                    </div>
                </div>
            </div>
        </div>
    )
}