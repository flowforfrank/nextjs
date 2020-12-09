import Button from '../components/Button'

import styles from '../css/index.module.css'

const Index = () => (
    <>
        <img src="next.svg" className={styles.logo} alt="logo" />
        <Button text="See quotes" link="list" />
    </>
);

export default Index;