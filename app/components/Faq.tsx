'use client'
import { useEffect, useRef, useState } from 'react'
import styles from '../../public/css/Faq.module.css'
import Image from 'next/image'
interface Ifaq {
    show: boolean,
    question: string,
    answer: string
}

const faqLists: Ifaq[] = [
    {
        show: true,
        question: 'What is stWBTC?',
        answer: 'stWBTC, a ERC-20 token which represents the user’s share of the WBTC asset management pool, is a rebase token and users will be able to redeem more WBTC as the time staked increases.'
    },
    {
        show: false,
        question: 'How does stWBTC maintains its operations?',
        answer: 'stWBTC, similar to other protocols requires a stream of income to sustain its operations. stWBTC will draw a percentage from the yield obtained on behalf of the WBTC stakers to sustain the operations.'
    },
    {
        show: false,
        question: 'How does stWBTC provide its yield?',
        answer: 'The yield will be generated and optimised with multiple DeFi strategies on various chains. Return generated will be regularly withdrawn and converted to WBTC or BTC equivalent and reinvested.'
    },
    {
        show: false,
        question: 'What does stWBTC bring to DeFi?',
        answer: "stWBTC enables the holders of WBTC, a pioneer crypto asset, to earn yields without decreasing their holdings."
    }
]

function Faq () {
    const [faqList, setFaqList] = useState(faqLists)

    const changeShow = (inx: number) => {
        const newArray = [...faqList];
        newArray[inx].show = !newArray[inx].show;
        setFaqList(newArray)
    }

    return (
        <div className={styles.container}>
            {faqList.map((faq, inx) => {
                return <Panel key={faq.question} faq={faq} inx={inx} onchange={changeShow} />
            })}
        </div>
    )
}

function Panel ({faq, inx, onchange} : {faq: Ifaq, inx: number, onchange: (inx: number) => void}) {
    const [panel, setPanel] = useState<number | undefined>(0)
    const refDom = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        setPanel(refDom.current?.scrollHeight)
    })
    return (
        <div className={styles.wrapper} onClick={() => onchange(inx)}>
            <div className={styles.questionBox}>
                <p>{faq.question}</p>
                {faq.show ? (
                    <Image
                    src='/imgs/home/icon-close.svg'
                    alt={faq.question}
                    width={32}
                    height={32}
                />
                ) : (
                    <Image
                    src='/imgs/home/icon-open.svg'
                    alt={faq.question}
                    width={32}
                    height={32}
                />
                )}
            </div>
            <p ref={refDom} className={styles.answer} style={{height: faq.show ? panel : 0}}>{faq.answer}</p>
        </div>
    )
}

export default Faq