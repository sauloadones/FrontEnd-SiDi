import "./Navbar.css";
import { FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('id');
        localStorage.removeItem('name');
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <input type="image" onClick={() => navigate("/home")} className="navbar-brand" src="/imagens/sidi_logo.png" alt="logo" />
            <div className="navbar-divider" />
            <h1 className="navbar-text align-right">Bom dia, {localStorage.getItem('name')}!</h1>
            <FaRegCircleUser className="navbar-icon align-left"/>
            <button onClick={() => handleLogout()} className="navbar-text">Perfil</button>
        </nav>
    );
};

export default Navbar;