import './styles.css'
import BodyFrame from '@components/body-frame';
import Head from '@components/Head';
import { FaRegCircleXmark } from "react-icons/fa6";

const Pagamento = () => {
    
    return (
        <BodyFrame>
            <Head title="Pagamento"/>
            <a href="/home"><FaRegCircleXmark className='content-icon'/></a>
            <h1 className='center-text'>Histórico Salarial</h1>
            <div className='divider flex'>
                <p className='flex-left'>DATA</p>
                <p className='flex-center'>MOTIVO</p>
                <p className='flex-right'>SALÁRIO</p>
            </div>

            <div className='items-salary flex'>
                <p className='flex-left'>Fev.</p>
                <p className='flex-center'>Salário</p>
                <p className='flex-right'>1.736,50</p>
            </div>
            <div className='divider-thin'/>

            <div className='items-salary flex'>
                <p className='flex-left'>Mar.</p>
                <p className='flex-center'>Merito</p>
                <p className='flex-right'>1.932,30</p>
            </div>
            <div className='divider-thin'/>

            <div className='items-salary flex'>
                <p className='flex-left'>Abr.</p>
                <p className='flex-center'>Merito</p>
                <p className='flex-right'>1.932,30</p>
            </div>
            <div className='divider-thin'/>

            <div className='items-salary flex'>
                <p className='flex-left'>Mai.</p>
                <p className='flex-center'>Acordo Coletivo</p>
                <p className='flex-right'>1.822,00</p>
            </div>
            <div className='divider-thin'/>
        </BodyFrame>    
    );
};

export default Pagamento;
