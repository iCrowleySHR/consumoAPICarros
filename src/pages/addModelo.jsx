import Header from '../components/header'
import Footer from '../components/footer'
import NavDados from '../components/navDados';
import Swal from 'sweetalert2'
import { fetchMarcas, submitModelo, fetchModelo } from '../utils/FuncoesAPI';
import '../styles/form.css'
import React, { useState, useEffect } from 'react';

function addTransmissao() {
    const [modelo, setModelo] = useState([]);
    useEffect(() => {
        fetchModelo().then(dadosAPI => {
            setModelo(dadosAPI);
        });
    }, []);

    const [marca, setMarca] = useState([]);
    useEffect(() => {
        fetchMarcas().then(dadosAPI => {
            setMarca(dadosAPI);
        });
    }, []);

    const [dados, setDados] = useState({
        modelo: '',
        id_marca: ''
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
        submitModelo(dados)
            .then(resultado => {
                console.log(resultado)
                if (resultado === true) {
                    Swal.fire({
                        title: 'Enviado com succeso!',
                        text: 'Os dados inseridos foi implementado no nosso banco',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    setDados((prevDados) => ({
                        ...prevDados,
                        transmissao: ''
                    }));
                } else {
                    Swal.fire({
                        title: 'Parece que ocorreu algum erro!',
                        text: 'Tente mais tarde :(',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })
                }
            })
            .catch(erro => {
                console.error(erro);
                Swal.fire({
                    title: 'Parece que ocorreu algum erro!',
                    text: 'Tente mais tarde :(',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            });
    };


    return (
        <>
            <Header />
            <NavDados />
            <main className='container py-3 mb-5 main-adicionar'>
                <article className='text-center'>
                    <h1>Adicione um modelo!</h1>
                    <p>Abaixo estará todos os modelos que já estão presentes no banco de dados, caso falte algum, adicione!</p>
                </article>
                <label>Essas são as tranmissões presentes no nosso banco de dados:</label>
                <ul>
                    {modelo.map(dados => (
                        <li key={dados.id}>
                            {dados.nome_modelo}
                        </li>
                    ))}
                </ul>
                <form onSubmit={EnviandoSubmit}>
                    <label htmlFor="id_marca">Adicione a marca do modelo:</label>
                    <select
                        className='form-select'
                        onChange={handleChange}
                        value={dados.id_marca}
                        id='id_marca'>

                        {marca.map(dados => (
                            <option value={dados.id} key={dados.id} >
                                {dados.nome_marca}
                            </option>
                        ))}
                    </select>

                    <label>Digite o nome do modelo da marca</label>
                    <input type="text" className='form-control' id='modelo' value={dados.modelo} onChange={handleChange} required />

                    <button type='submit' className='btn btn-primary btn-lg my-2'>Enviar dados</button>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default addTransmissao