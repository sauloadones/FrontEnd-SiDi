import "./signin.css";
import { useState } from "react";
import { API_ENDPOINTS, API } from "@api";
import { FaUser} from "react-icons/fa";
import { MdLock } from "react-icons/md";

const Signin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await API.post(API_ENDPOINTS.LOGIN, {
                email,
                password,
            });
            console.log('Login successful:', response);
            const token = response.data.token; // Assuming the token is in the response
            const name = response.data.username; // Assuming the name is in the response
            const id = response.data.id; // Assuming the id is in the response

            // Save the token in localStorage
            localStorage.setItem('authToken', token);
            localStorage.setItem('name', name);
            localStorage.setItem('id', id);
    
            // Redirect to /home
            window.location.href = '/home'; 

        } catch (error) {
        // Handle HTTP errors like 401
            if (error.response) {
                // The backend responded with a status outside of the 2xx range
                console.log('Error:', error);
                setMessage(error.response.data.message);
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
        <form onSubmit={handleLogin}>
            <div className="content-input">
                <FaUser className='icon' />
                <input type="text" placeholder="Email" id="user-text" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="content-input">
                <MdLock className='icon' />
                <input type="password" placeholder="Senha" id="password-text" value={password} onChange={(e) => setPassword(e.target.value)} required />
                
            </div>

            {message && <p className="error-text">{message}</p>}

            <div className="container-nav">
                <p>lembre-se de mim</p>
                <a className='forgot-password a-text' href="/esqueceu">Esqueceu sua senha?</a>
            </div>

            <button className='button' type="submit" >Entrar</button>
            <div className="container-nav">
                <p>Não tem conta? <a className='cadastre-a a-text' href="/register">Cadastre-se</a></p>
            </div>
        </form>
    );
};

export default Signin;