import './styles.css'
import Head from "@components/Head";
import Signin from '@components/signin';

const Login = () => {
    return (
        
        <div className="container-login">
            <Head title="Login"/>
            <div className='container-image'></div>
            <div className="container-form-login">
            <img src='/imagens/Logo login-cadastro.svg'/>
                <div className="header-title">
                    <h1>Login</h1>
                    <p className=""></p>
                </div>

                <Signin />

            </div>

        </div>
    )
}

export default Login

