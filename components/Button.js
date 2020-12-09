import Link from 'next/link'

import styles from '../css/input.module.css'

const Button =({ text, link }) => (
    <div className={styles['input-container']}>
        <button className={styles.input}>
            <Link href={`/${link}`}>
                {text}
            </Link>
        </button>
    </div>
);

export default Button;