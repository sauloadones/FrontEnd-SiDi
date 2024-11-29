import "./signup.css";
import { useState } from "react";
import { API, API_ENDPOINTS} from "@api";
import { FaUser} from "react-icons/fa";
import { MdLock, MdEmail } from "react-icons/md";

const Signup = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await API.post(API_ENDPOINTS.CREATE_USER, {
                email,
                name,
                password,
                confirmPassword,
            });
            console.log('Sign up successful:', response);
            window.location.href = '/login'; 
        } catch (error) {
        // Handle HTTP errors like 401
            if (error.response) {
                // The backend responded with a status outside of the 2xx range
                console.log('Error:', error);
                setMessage(error.response.data.message.message);
            } else if (error.request) {
                // No response from the backend
                setMessage('No response from server. Please try again.');
            } else {
                // Other errors
                setMessage(`Unexpected error:`);
            }
        }
    }
    
    return (
        <form onSubmit={handleSignup}>
            <div className="content-input">
                <FaUser className='icon' />
                <input type="text" placeholder="Usuário" id="user-text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="content-input">
                <MdEmail className='icon' />
                <input type="email" placeholder="Email" id="user-text" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="content-input">
                <MdLock className='icon' />
                <input type="password" placeholder="Senha" id="password-text" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="content-input">
                <MdLock className='icon' />
                <input type="password" placeholder="Confirmar Senha" id="password-text" value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} required />
            </div>

            {message && <p className="error-text">{message}</p>}

            <div className="container-nav">
                <p> Ao prosseguir com o cadastro, voce está sujeito aos <a className='termos a-termos' href="#">termos de condição</a></p>

            </div>

            <button className='button' type="submit">Entrar</button>
            <div className="container-nav">
                <p>Ja tem uma conta? <a className='cadastre-a a-text' href="/login">Faça Login</a></p>
            </div>

        </form>
    );
};

export default Signup;