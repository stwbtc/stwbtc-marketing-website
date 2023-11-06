"use client"
import styles from  '../../public/css/Nav.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import _ from 'lodash'
import { EMAIL_CONFIG } from '../constants/index'

export default function Nav() {
	const pathname = usePathname()
	const [fixedNav, setFixedNav] = useState(false)
    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop
        if (scrollTop > 80) {
            setFixedNav(true)
        } else {
            setFixedNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', _.throttle(handleScroll, 150))

        return () => {
            window.removeEventListener('scroll', _.throttle(handleScroll, 150))
        }
    })
    return (
      <div className={[styles.container, fixedNav ? styles.navBorder : ''].join(' ')}>
			<div className={styles.wrapper}>
				<Link href="/" className={styles.logoBox}>
					<Image
						src="/imgs/home/nav-logo.svg"
						alt="stWBTC LOGO"
						width="40"
						height="40"
						priority
					/>
					<span className={styles.token}>stWBTC</span>
				</Link>
                <div className={styles.btnGroup}>
                    <a href='/pdf/whitepaper.pdf' target='_blank' className={styles.btnGhost}>White paper</a>
                    <a href='https://wbtc.network/' target='_blank' className={styles.btn}>Get WBTC</a>
                </div>
			</div>
    	</div>
    )
}
  