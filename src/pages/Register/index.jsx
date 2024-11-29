import './styles.css'
import Head from "@components/Head";
import Signup from '@components/signup';

const Register = () => {
    return (
        <div className="container-register">
            <Head title="Cadastro"/>
            <div className='container-image'></div>
            <div className="container-form-register">
            <img src='/imagens/Logo login-cadastro.svg'/>
                <div className="header-title">
                    <h1>Cadastro</h1>
                    <p className=""></p>
                </div>
                <Signup />
            </div>

        </div>
    )
}

export default Register

