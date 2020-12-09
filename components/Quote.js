import styles from '../css/quote.module.css'

const Quote = ({ text, author }) => (
    <blockquote className={styles.quote}>
        <img src="quote-sign.svg" className={styles['quote-sign']} alt="Quote sign" />
        {text}”
        {author && (
            <span className={styles.author}>~ {author}</span>
        )}
    </blockquote>
);

export default Quote;