import styles from "./Number.module.css"
export default function Number() {
    return(
        <div className={styles.a}>
            <div className={styles.aa}>
                <div className={styles.a1}>
                    <h1>Why Choose Us?</h1>
                    <p>Whether you're looking to switch to solar energy or upgrade your cable services, our sales and marketing company is here to help.</p>
                </div>
                <div className={styles.a2}>
                    <h1>01</h1>
                    <span>Expertise and Experience</span>
                    <p>With years of experience in the sales and marketing industry, our team has a deep </p>
                </div>
                <div className={styles.a3}>
                    <h1>02</h1>
                    <span>Extensive Network</span>
                    <p>We have established strong relationships with the leading solar and cable companies in the region</p>
                </div>
            </div>
            <div className={styles.aa}>
                <div className={styles.a2}>
                    <h1>03</h1>
                    <span>Personalized Approach</span>
                    <p>We believe that every customer is unique, and their needs should be addressed accordingly</p>
                </div>
                <div className={styles.a2}>
                    <h1>04</h1>
                    <span>Cost Savings</span>
                    <p>By leveraging our industry knowledge and network, we can help you save money on your solar and cable purchases</p>
                </div>
                <div className={styles.a2}>
                    <h1>05</h1>
                    <span>Hassle-Free Process</span>
                    <p>We handle all the research, negotiations, and paperwork for you, making the process of finding</p>
                </div>
            </div>
        </div>
    )
}