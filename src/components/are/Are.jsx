import styles from "./Are.module.css"
export default function Are() {
    return(
        <div className={styles.a}>
            <div className={styles.a1}>
                <h1>Who We Are</h1>
                <p>Welcome to our sales and marketing company, where we specialize in helping customers snag great deals from the leading solar and cable companies in the DC, Maryland, and Virginia area.We understand that finding the right solar and cable solutions for your needs can be a daunting task, which is why we're here to make the process easier and more affordable for you.</p>
                <div className={styles.btn}>
                    <button className={styles.white}>Read More</button>
                    <button className={styles.black}>Contact us today</button>
                </div>
            </div>
            <div className={styles.a2}>
                <div className={styles.b1}></div>
                <div className={styles.b2}></div>
            </div>
        </div>
    )
}