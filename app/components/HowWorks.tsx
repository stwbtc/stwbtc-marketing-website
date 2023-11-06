"use client"
import { useMemo, useState } from 'react'
import styles from '../../public/css/HowWorks.module.scss'
import Image from 'next/image'

const workMethodList = [
    {
        name: 'Onboarding Cycle',
        value: 'onboarding',
        img: '/imgs/home/onboarding-cycle.png'
    },
    {
        name: 'Offboarding Cycle',
        value: 'offboarding',
        img: '/imgs/home/offboarding-cycle.png'
    }
]
function HowWorks () {
    const [workMethod, setWordMethod] = useState('onboarding')
    const currentImg = useMemo(() => {
        return workMethodList.filter((v) => v.value === workMethod)[0].img
    }, [workMethod])
    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <p className={styles.title}>How does stWBTC work?</p>
            <ul className={styles.btnGroup}>
                {workMethodList.map((v) => (
                    <li onClick={() => setWordMethod(v.value)} key={v.value} className={[styles.btn, v.value === workMethod ? styles.active : ''].join(' ')}>{v.name}</li>
                ))}
            </ul>
            <div
                className={styles.bg}
                style={{backgroundImage: `url(${currentImg})`}}
            />
            </div>
        </div>
    )
}

export default HowWorks