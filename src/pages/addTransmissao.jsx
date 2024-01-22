import Header from '../components/header'
import Footer from '../components/footer'
import NavDados from '../components/navDados';
import {fetchTransmissão, submitTransmissao } from '../utils/FuncoesAPI';
import '../styles/form.css'
import React, { useState, useEffect } from 'react';

function addTransmissao() {
    const [transmissao, setTransmissao] = useState([]);

    useEffect(() => {
        fetchTransmissão().then(dadosAPI => {
            setTransmissao(dadosAPI);
        });
    }, []);

    const [dados, setDados] = useState({
        transmissao: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setDados((prevDados) => ({
            ...prevDados,
            [id]: value,
        }));
    };

    const EnviandoSubmit = (e) => {
        e.preventDefault();
        submitTransmissao(dados);
    };


    return (
        <>
            <Header />
            <NavDados />
            <main className='container py-3 mb-5 main-adicionar'>
                <article className='text-center'>
                    <h1>Adicione um transmissão!</h1>
                    <p>Abaixo estará todos as transmissões que já estão presentes no banco de dados, caso falte algum, adicione!</p>
                </article>
                <label>Essas são as tranmissões presentes no nosso banco de dados:</label>
                <ul>
                    {transmissao.map(dados => (
                        <li key={dados.id}>
                            {dados.nome_transmissao}
                        </li>
                    ))}
                </ul>
                <form onSubmit={EnviandoSubmit}>
                    <label>Digite a transmissão que você deseja adicionar</label>
                    <input type="text" className='form-control' id='transmissao' onChange={handleChange} required />

                    <button type='submit' className='btn btn-primary btn-lg my-2'>Enviar dados</button>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default addTransmissao