import Header from '../components/header'
import Footer from '../components/footer'
import NavDados from '../components/navDados';
import { fetchCombustiveis, submitCombustivel } from '../utils/FuncoesAPI';
import '../styles/form.css'
import React, { useState, useEffect } from 'react';

function addCombustivel() {
    const [combustiveis, setCombustiveis] = useState([]);

    useEffect(() => {
        fetchCombustiveis().then(dadosAPI => {
            setCombustiveis(dadosAPI);
        });
    }, []);

    const [dados, setDados] = useState({
        combustivel: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setDados((prevDados) => ({
            ...prevDados,
            [id]: value,
        }));
    };
    const [respostaAPI, setRespostaAPI] = useState([]);
    const EnviandoSubmit = (e) => {
        e.preventDefault();
    /*********************************************************************************************** */
        submitCombustivel(dados)
          .then(resposta => {
            setRespostaAPI(resposta);
          })
          .catch(erro => {
            console.error(erro);
          });
      };
    
      useEffect(() => {
        console.log(respostaAPI);
      }, [respostaAPI]);

    return (
        <>
            <Header />
            <NavDados />
            <main className='container py-3 mb-5 main-adicionar'>
                <article className='text-center'>
                    <h1>Adicione um combustivel!</h1>
                    <p>Abaixo estará todos os combustiveis que já estão presentes no banco de dados, caso falte algum, adicione!</p>
                </article>
                <label>Esse são os combustiveis presentes no nosso banco de dados:</label>
                <ul>
                    {combustiveis.map(dados => (
                        <li key={dados.id}>
                            {dados.nome_combustivel}
                        </li>
                    ))}
                </ul>
                <form onSubmit={EnviandoSubmit}>
                    <label>Qual combustivel você deseja adicionar?</label>
                    <input type="text" className='form-control' id='combustivel' onChange={handleChange} required />

                    <button type='submit' className='btn btn-primary btn-lg my-2'>Enviar dados</button>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default addCombustivel
