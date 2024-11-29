import "./body-frame.css"
import Navbar from "@components/Navbar"
import SideMenu from "@components/side-menu"

const BodyFrame = ({children}) => {
    return (
        <div>
            <Navbar />
            <div className='container-body'>
                <div className='half'>
                    <div className='purple-filter'/>
                    <img src='/imagens/coworkers-looking-monitor.png' className='center-cropped'/>
                    <p className='text-image'>Nossa missão é criar<br/>soluções para um mundo<br/>mais inteligente e seguro!</p>
                </div>
                <div className='half'>
                    <div className='container-content'>
                        <div className='content'>
                            {children}
                        </div>
                        <SideMenu />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BodyFrame;