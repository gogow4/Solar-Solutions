import styles from "./Navbar.module.css"

export default function Navbar() {
    return (
        <div className={styles.a}>
            <div className={styles.a1}>
                <div className={styles.aa}></div>
                <div className={styles.t}>
                    <h1>LOGO</h1>
                    <h3>HERE</h3>
                </div>
            </div>
            <div className={styles.a2}>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>SOLAR INITIATIVES</li>
                    <li>OUR SERVICES</li>
                    <li>COMMUNITY</li>
                    <li>AESTHETICS</li>
                </ul>
            </div>
        </div>
    )
}