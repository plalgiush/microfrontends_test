import { Helmet } from "react-helmet-async"

const Login = () => {
    return (
        <>
            <Helmet>
                <title>Login</title>
                <link rel="canonical" href="/login" />
                <meta name="description" content="Login page" />
            </Helmet>
            <h1>Login Page</h1>
        </>
    )
}

export default Login