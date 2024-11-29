import './styles.css';
import { useState, useEffect } from 'react';
import { API_ENDPOINTS, API } from "@api";
import BodyFrame from '@components/body-frame';
import Head from '@components/Head';

const Home = () => {
    const [checkInID, setCheckInID] = useState('');
    const [checkInTime, setCheckInTime] = useState('');
    const [checkOutTime, setCheckOutTime] = useState('');
    const [breakStartTime, setBreakStartTime] = useState('');
    const [breakEndTime, setBreakEndTime] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [buttonState, setButtonState] = useState('checkIn'); // 'checkIn', 'main', 'breakStart', 'breakEnd', 'hidden'

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const formattedDate = new Intl.DateTimeFormat('pt-BR', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            }).format(now);

            setCurrentDate(formattedDate);
        }, 1000);

        const fetchPontos = async () => {
            try {
                const response = await API.get(API_ENDPOINTS.GET_CHECKINS + localStorage.getItem('id'));
                const pontos = response.data; // Lista de pontos recebida da API
    
                // Obtém a data atual no formato dd/mm/yyyy
                const today = new Date().toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                });
    
                // Procura por um ponto correspondente à data atual
                const pontoHoje = pontos.find((ponto) => ponto.checkInData === today && ponto.userId === localStorage.getItem('id'));
    
                if (pontoHoje) {
                    // Atualiza os estados com os dados do ponto de hoje
                    setCheckInID(pontoHoje.id);
                    setCheckInTime(pontoHoje.checkInHorario);
                    setCheckOutTime(pontoHoje.checkOutHorario);
                    setBreakStartTime(pontoHoje.intervalEntradaHorario);
                    setBreakEndTime(pontoHoje.intervalSaidaHorario);
    
                    // Define o estado dos botões com base nos dados carregados
                    if (pontoHoje.checkOutHorario != "") {
                        setButtonState('hidden'); // Ponto completo
                    } else if (pontoHoje.intervalEntradaHorario != "") {
                        setButtonState('breakStart'); // Durante o intervalo
                    } else if (pontoHoje.intervalSaidaHorario != "") {
                        setButtonState('breakEnd' != ""); // Após o fim do intervalo
                    } else {
                        setButtonState('main'); // Após o check-in
                    }
                } else {
                    // Não há ponto hoje; botão de check-in será exibido
                    setButtonState('checkIn');
                }
            } catch (err) {
                console.error('Erro ao buscar pontos:', err);
            }
        };
    
        fetchPontos();
        return () => clearInterval(intervalId);
    }, []);

    const checkIn = async (e) => {
        e.preventDefault();
        try {
            const response = await API.post(API_ENDPOINTS.CHECKIN + localStorage.getItem('id'));
            console.log('Check-in realizado!', response);
            setCheckInID(response.data.id);
            setCheckInTime(response.data.checkInHorario);
            setButtonState('main');
        } catch (error) {
            console.error('Erro ao realizar Check-in:', error);
        }
    };

    const checkOut = async (e) => {
        e.preventDefault();
        try {
            const response = await API.patch(API_ENDPOINTS.CHECKOUT + checkInID);
            console.log('Check-out realizado!', response);
            setCheckOutTime(response.data.checkOutHorario);
            setButtonState('hidden');
        } catch (error) {
            console.error('Erro ao realizar Check-out:', error);
        }
    };

    const breakStart = async (e) => {
        e.preventDefault();
        try {
            const response = await API.patch(API_ENDPOINTS.BREAK_START + checkInID);
            console.log('Início do intervalo realizado!', response);
            setBreakStartTime(response.data.intervalEntradaHorario);
            setButtonState('breakStart');
        } catch (error) {
            console.error('Erro ao realizar Início do intervalo:', error);
        }
    };

    const breakEnd = async (e) => {
        e.preventDefault();
        try {
            const response = await API.patch(API_ENDPOINTS.BREAK_END + checkInID);
            console.log('Fim do intervalo realizado!', response);
            setBreakEndTime(response.data.intervalSaidaHorario);
            setButtonState('breakEnd');
        } catch (error) {
            console.error('Erro ao realizar Fim do intervalo:', error);
        }
    };

    return (
        <BodyFrame>
            <Head title="Home" />
            <h1 className='text-title'>Bater Ponto:</h1>
            <div className='divider'>
                <img src="/imagens/calendar-icon.png" alt="calendar" className='home-icon-higlight' />
                <h1 className='text-higlight'>{currentDate}</h1>
            </div>
            <h1 className='left-text'>Jornada</h1>

            <img src="/imagens/enter-icon.png" alt="enter" className='home-icon' />
            <h1 className='text-item-big'>Entrada</h1>
            <h1 className='text-item' style={{ width: "60%" }}>Checkin<br />{checkInTime}</h1>
            <div className='line-break' />

            <img src="/imagens/coffe-icon.png" alt="coffe" className='home-icon' />
            <h1 className='text-item-big'>Início intervalo</h1>
            <h1 className='text-item' style={{ width: "45%" }}>Break<br />{breakStartTime}</h1>
            <div className='line-break' />

            <img src="/imagens/work-icon.png" style={{ margin: "7px 0px 0px 17px" }} alt="work" className='home-icon' />
            <h1 className='text-item-big'>Fim intervalo</h1>
            <h1 className='text-item' style={{ width: "48%" }}>Return<br />{breakEndTime}</h1>
            <div className='line-break' />

            <img src="/imagens/exit-icon.png" alt="exit" className='home-icon' />
            <h1 className='text-item-big'>Saída</h1>
            <h1 className='text-item' style={{ width: "65%" }}>Checkout<br />{checkOutTime}</h1>
            <div className='line-break' />

            {/* Botões com exibição condicional */}
            {buttonState === 'checkIn' && <button onClick={checkIn} className='btn'>Entrar</button>}
            {buttonState === 'main' && (
                <>
                    <button onClick={breakStart} className='btn'>Início Intervalo</button>
                    <button onClick={checkOut} className='btn exit-btn'>Saída</button>
                </>
            )}
            {buttonState === 'breakStart' && (
                <>
                    <button onClick={breakEnd} className='btn interval-btn'>Fim Intervalo</button>
                    <button onClick={checkOut} className='btn exit-btn'>Saída</button>
                </>
            )}
            {buttonState === 'breakEnd' && <button onClick={checkOut} className='btn exit-btn'>Saída</button>}
        </BodyFrame>
    );
};

export default Home;