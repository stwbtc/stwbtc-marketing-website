"use client"
import { useMemo, useState } from 'react'
import styles from '../../public/css/Roadmap.module.scss'

interface IList {
    month: string
    desc: string
}

interface IRoadMap {
    year: string
    list: IList[]
}

const roadmapList = [
    {
        year: 'All',
        list: [
            {
                month: '2023 Q4',
                desc: 'Preparation of Smart Contracts'
            },
            {
                month: '2024 Q1',
                desc: 'Launch on Etheruem Testnet'
            },
            {
                month: '2024 Q2',
                desc: 'Soft-Launch on Ethereum Mainnet for whitelisted clients'
            },
            {
                month: '2024 Q3',
                desc: 'Open to public'
            }
        ],
    },
    {
        year: '2023',
        list: [
            {
                month: '2023 Q4',
                desc: 'Preparation of Smart Contracts'
            },
        ]
    },
    {
        year: '2024',
        list: [
            {
                month: '2024 Q1',
                desc: 'Launch on Etheruem Testnet'
            },
            {
                month: '2024 Q2',
                desc: 'Soft-Launch on Ethereum Mainnet for whitelisted clients'
            },
            {
                month: '2024 Q3',
                desc: 'Open to public'
            }
        ]
    }
]
function Roadmap () {
    const [year, setYear] = useState('All');
    const list = useMemo(() => {
        return roadmapList.filter((v) => v.year === year)[0].list || []
    }, [year])

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.left}>
                    {list.length > 0 && list.map((v)  => (
                        <div key={v.month} className={styles.record}>
                            <span className={styles.icon}></span>
                            <span className={styles.date}>{v.month}</span>
                            <span className={styles.desc}>{v.desc}</span>
                        </div>
                    ))}
                </div>
                <div className={styles.right}>
                    <p className={styles.title}>Our Roadmap</p>
                    <ul className={styles.dateList}>
                        {roadmapList.map((v) => (
                            <li onClick={() => setYear(v.year)} key={v.year} className={v.year === year ? styles.active : ''}>{v.year}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Roadmap