import Head from 'next/head'

import '../css/base.css'

const App = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>Next quote</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <Component {...pageProps} />
        </main>
    </>
);

export default App;