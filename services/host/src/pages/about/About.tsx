import Layout from "@/components/Layout/Layout"
import { Suspense, lazy } from "react"
import { Helmet } from "react-helmet-async"
// @ts-ignore
const Product = lazy(() => import('product/Product'))

const About = () => {
    return (
        <>
            <Helmet>
                <title>About</title>
                <link rel="canonical" href="/about" />
                <meta name="description" content="About page" />
            </Helmet>
            <Suspense fallback={<div>Loading product...</div>}>
                <Product px={0} />
            </Suspense>
        </>
    )
}

export default About