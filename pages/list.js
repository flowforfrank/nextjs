import { useState } from 'react'
import Quote from '../components/Quote'
import styles from '../css/list.module.css'
import inputStyles from '../css/input.module.css'

const List = ({ quotes }) => {
    const [filteredQuotes, updateQuotes] = useState(quotes);

    const filterQuotes = e => {
        const results = filteredQuotes.filter(quote => quote.author && quote.author.toLowerCase().startsWith(e.target.value.toLowerCase()))

        updateQuotes(results);
    }

    return (
        <>
            <div className={inputStyles['input-container']}>
                <input className={inputStyles.input} placeholder="Filter by author" onKeyUp={filterQuotes} />
            </div>
            {filteredQuotes.map((quote, index) => (
                <div className={styles['quote-wrapper']} key={index}>
                    <Quote text={quote.text} author={quote.author} />
                    <span className={styles['quote-number']}>{`#${index + 1}`}</span>
                </div>
            ))}
        </>
    )
}

export const getStaticProps = async context => {
    const result = await fetch('https://type.fit/api/quotes');
    const quotes = await result.json();

    return {
        props: {
            quotes
        }
    }
}

export default List;