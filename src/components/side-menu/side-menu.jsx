import "./side-menu.css"
import { NavLink } from "react-router-dom";


const SideMenu = () => {
    return (
        <div className='menu-blocks'>
            <NavLink to="/home/pontos" className={({ isActive }) => isActive ? "block active" : "block"}>
                <img src='/imagens/carrier-icon.png' className='menu-icon'/>
                <h1 className='block-text text-underline'>Meus<br/>Pontos</h1>
            </NavLink>
            <NavLink to="/home/pagamento" className={({ isActive }) => isActive ? "block active" : "block"}>
                <img src='/imagens/wallet-icon.png' className='menu-icon'/>
                <h1 className='block-text text-underline'>Pagamento</h1>
            </NavLink>
            <NavLink to="/home/localizacao" className={({ isActive }) => isActive ? "block active" : "block"}>
                <img src='/imagens/map-icon.png' className='menu-icon'/>
                <h1 className='block-text text-underline'>Minha<br/>Localização</h1>
            </NavLink>
            <NavLink to="/home/justificar" className={({ isActive }) => isActive ? "block active" : "block"}>
                <img src='/imagens/user-icon.png' className='menu-icon'/>
                <h1 className='block-text text-underline'>Justificar<br/>Faltas</h1>
            </NavLink>
        </div>
    );
};

export default SideMenu;