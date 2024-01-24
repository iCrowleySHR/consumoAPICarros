import Header from '../components/header'
import Footer from '../components/footer'
import NavDados from '../components/navDados';
import Swal from 'sweetalert2'
import {fetchMarcas, submitMarca } from '../utils/FuncoesAPI';
import '../styles/form.css'
import React, { useState, useEffect } from 'react';

function addMarca() {
    const [marca, setMarca] = useState([]);

    useEffect(() => {
        fetchMarcas().then(dadosAPI => {
            setMarca(dadosAPI);
        });
    }, []);

    const [dados, setDados] = useState({
        marca: ''
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
        submitMarca(dados)
        .then(resultado => {
            if (resultado === true) {
                Swal.fire({
                    title: 'Enviado com succeso!',
                    text: 'Os dados inseridos foi implementado no nosso banco',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                setDados((prevDados) => ({
                    ...prevDados,
                    marca: ''
                }));
            }else{
                Swal.fire({
                    title: 'Parece que ocorreu algum erro!',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            }
        })
        .catch(erro => {
            console.error(erro);
        });  
    };


    return (
        <>
            <Header />
            <NavDados />
            <main className='container py-3 mb-5 main-adicionar'>
                <article className='text-center'>
                    <h1>Adicione uma marca!</h1>
                    <p>Abaixo estará todos as marcas que já estão presentes no banco de dados, caso falte algum, adicione!</p>
                </article>
                <label>Essas são as marcas presentes no nosso banco de dados:</label>
                <ul>
                    {marca.map(dados => (
                        <li key={dados.id}>
                            {dados.nome_marca}
                        </li>
                    ))}
                </ul>
                <form onSubmit={EnviandoSubmit}>
                    <label>Digite a marca que você deseja adicionar</label>
                    <input type="text" className='form-control' id='marca' value={dados.marca} onChange={handleChange} required />

                    <button type='submit' className='btn btn-primary btn-lg my-2'>Enviar dados</button>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default addMarca