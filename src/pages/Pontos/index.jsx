import './styles.css'
import Head from '@components/head';   
import BodyFrame from '@components/body-frame';
import { useState, useEffect } from 'react';
import { API_ENDPOINTS, API } from "@api";
import { FaRegCircleXmark } from "react-icons/fa6";

const Pontos = () => {
    const [pontos, setPontos] = useState([]); // Estado para armazenar os pontos

    // Função para buscar os pontos
    const fetchPontos = async () => {
        try {
            const response = await API.get(API_ENDPOINTS.GET_CHECKINS+localStorage.getItem('id'));
            const pontosFiltrados = response.data.filter((ponto) => ponto.userId === localStorage.getItem("id"));
            setPontos(pontosFiltrados); // Atualiza o estado com os dados da API
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchPontos();
    }, []);

    return (
        <BodyFrame>
            <Head title="Pontos"/>
            <a href="/home"><FaRegCircleXmark className='content-icon'/></a>
            <h1 className='center-text'>Meus Pontos</h1>
            <div className='divider' />
            <div className='pontos-container'>
                {pontos.map((ponto, index) => (
                    <div key={index} className='ponto-container'>
                        <div className='ponto-text-container'>
                            <div className='ponto-text-flex'>
                                <p className='ponto-text-left'>Dia:<br/>{ponto.checkInData}</p>
                                <p className='ponto-text-center'>Intervalo Inicio:<br/>{ponto.intervalEntradaHorario}</p>
                                <p className='ponto-text-right'>Dia:<br/>{ponto.checkOutData}</p>
                            </div>
                            <div className='ponto-text-flex'>
                                <p className='ponto-text-left'>Entrada:<br/>{ponto.checkInHorario}</p>
                                <p className='ponto-text-center'>Intervalo Fim:<br/>{ponto.intervalSaidaHorario}</p>
                                <p className='ponto-text-right'>Saida:<br/>{ponto.checkOutHorario}</p>
                            </div>
                        </div>
                        <div className='btn-ponto'>
                            <button className='btn-hidden'>Solicitar Correção</button>
                        </div>
                    </div>
                ))}
            </div>
        </BodyFrame>
    );
}

export default Pontos;
