import Footer from '../Footer/Footer'
import NewsLetter from '../NewsLetter/NewsLetter'
import Layout from '../Layout/Layout'
import Navbar from '../Navbar/Navbar'
import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

export const App = () => {
    return (
        <Layout>
            <Helmet>
                <title>5ka</title>
                <link rel="canonical" href="/" />
                <meta name="description" content="Beginner friendly page for learning React Helmet." />
            </Helmet>
            <Navbar />
            <Outlet />
            <NewsLetter />
            <Footer/>
        </Layout>
    )
}