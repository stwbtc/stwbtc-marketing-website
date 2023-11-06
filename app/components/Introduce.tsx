import styles from '../../public/css/Introduce.module.css'
import Image from 'next/image'

const introList = [
    {
        icon: '/imgs/home/yield-generation.svg',
        title: 'Yield-Generating',
        desc: 'Generate yields with WBTC holdings through multiple DeFi strategies, such as:',
        list: [
            {
                subDesc: 'Cross-chain and ERC liquidity pool fees'
            },
            {
                subDesc: 'Lending interests'
            },
            {
                subDesc: 'Yield optimization and aggregation'
            },
        ]
    },
    {
        icon: '/imgs/home/diversification.svg',
        title: 'Diversified',
        desc: 'stWBTC creates multiple venues of yield, generating a portfolio that is not reliant on a single yield provider.'
    },
    {
        icon: '/imgs/home/secure.svg',
        title: 'Secure',
        desc: 'stWBTC’s protocol and smart contracts have been designed by a team of seasoned developers.'
    },
    {
        icon: '/imgs/home/asset-strategy.svg',
        title: 'Risk-assessed',
        desc: 'All stWBTC-related assets, bridges, and protocols are assessed for its risk-to-reward ratio, ensuring that risk remains within an acceptable range across strategies.'
    },
]

function Introduce () {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
            {introList.map((intro) => {
                return <div className={styles.itemBox} key={intro.title}>
                    <div className={styles.img}>
                    <Image
                        src={intro.icon}
                        alt={intro.title}
                        width={40}
                        height={40}
                        priority
                    />
                    </div>
                    <p className={styles.title}>{intro.title}</p>
                    <p className={styles.desc}>{intro.desc}</p>
                    {intro.list && intro.list.length > 0 && (
                        <ul className={styles.subList}>
                            {intro.list?.map((v, inx) => (
                                <li key={v.subDesc}>
                                    <span className={styles.subTitle}>{inx + 1}.</span>
                                    {v.subDesc}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            })}
            </div>
        </div>
    )
}

export default Introduce