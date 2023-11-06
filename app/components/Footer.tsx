import Image from 'next/image'
import Link from 'next/link'
import styles from '../../public/css/Footer.module.scss'
import Twitter from './icons/twitter'
import Telegram from './icons/telegram'
import Discord from './icons/discord'

const copyRight = '© 2023 stWBTC. All rights reserved.'

export default function Footer() {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <div className={styles.leftBox}>
                    <Link className={styles.logoBox} href="/">
                        <Image
                            src="/imgs/home/nav-logo.svg"
                            alt="stWBTC LOGO"
                            width="40"
                            height="40"
                            priority
                        />
                        <span className={styles.token}>stWBTC</span>
                    </Link>
                </div>
                <div className={styles.rightBox}>
                    <p>Follow us</p>
                    <ul>
                        <li>
                            <Link
                                href="https://twitter.com/stwbtc_io"
                                target="_blank"
                            >
                                <Twitter />
                            </Link>
                        </li>
                        {/* <li>
                            <Link
                                href=""
                                target="_blank"
                            >
                                <Telegram />
                            </Link>
                        </li> */}
                    </ul>
                </div>
                <div className={styles.email}>
                    <p>Contact us</p>
                    <a href="mailto:socialmedia@stwbtc.io" className={styles.emailAddr}>socialmedia@stwbtc.io</a>
                </div>
            </div>
            <div className={styles.bottom}>
                <span className={styles.copyright}>{copyRight}</span>
            </div>
        </div>
      </div>
    )
  }
