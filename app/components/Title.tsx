import styles from '../../public/css/Title.module.css'


function Title ({ title, desc, children}: {title?: string, desc?: string, children?: React.ReactNode}) {
    return (
        <div className={styles.container}>
            {children}
            <p className={styles.title}>{title}</p>
            <p className={styles.desc}>{desc}</p>
        </div>
    )
}

export default Title;