import styles from '../../public/css/Banner.module.scss'

export default function Banner () {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <p className={styles.title}>
                    Discover stWBTC
                </p>
                <p className={styles.desc}>
                    stWBTC offers institutional and retail WBTC token holders a way to earn yield with their WBTC holdings through decentralized strategies.
                </p>
                <button className={styles.btn}>Stake WBTC</button>
            </div>
        </div>
    )
}