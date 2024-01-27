import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/form.css'
import { submitVeiculo, fetchCombustiveis, fetchMarcas, fetchTransmissao, fetchModelo } from '../utils/FuncoesAPI'
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import NavDados from '../components/navDados';
import ScrollReveal from 'scrollreveal';


function addVeiculo() {

    const [combustiveis, setCombustiveis] = useState([]);
    useEffect(() => {
        fetchCombustiveis().then(dadosAPI => {
            setCombustiveis(dadosAPI);
        });
    }, []);


    const [marcas, setMarcas] = useState([]);
    useEffect(() => {
        fetchMarcas().then(dadosAPI => {
            setMarcas(dadosAPI);
        });
    }, []);

    const [transmissao, setTransmissao] = useState([]);
    useEffect(() => {
        fetchTransmissao().then(dadosAPI => {
            setTransmissao(dadosAPI);
        });
    }, []);

    const [modelo, setModelo] = useState([]);
    useEffect(() => {
        fetchModelo().then(dadosAPI => {
            setModelo(dadosAPI);
        });
    }, []);

    const [dados, setDados] = useState({
        modelo: '1',
        valor: '',
        versao: '',
        linkIMG: '',
        anoProducao: '',
        anoLancamento: '',
        combustivel: '1',
        porta: '',
        motor: '',
        carroceria: '',
        pilotoAutomatico: 'true',
        climatizador: 'true',
        vidro: 'true',
        am_fm: 'true',
        auxiliar: 'true',
        bluetooth: 'true',
        cd_player: 'true',
        dvd_player: 'true',
        usb: 'true',
        mp3: 'true',
        transmissao: '1'
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
        submitVeiculo(dados)
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
            <main className='container pt-3 mb-5 main-adicionar'>
                <h1 className='text-center'>Adicionar dados para a API Carros!</h1>
                <p className='text-center'>Caso queira adicionar algum veículo para o nosso banco de dados, fique a vontade para preencher o formulário!😁😀</p>
                <form onSubmit={EnviandoSubmit} className='mt-2 form'>

                    <label htmlFor="modelo">Adicione o modelo do veiculo:</label>
                    <select
                        className='form-select'
                        onChange={handleChange}
                        value={dados.modelo}
                        id='modelo'>

                        {modelo.map(dados => (
                            <option value={dados.id} key={dados.id} >
                                {dados.nome_modelo}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="valor">Adicione o valor do carro:</label>
                    <input
                        type="number"
                        className='form-control'
                        id='valor'
                        value={dados.valor}
                        onChange={handleChange}
                    />

                    <label htmlFor="versao">Adicione a versão do carro:</label>
                    <input
                        type="text"
                        className='form-control'
                        id='versao'
                        value={dados.versao}
                        onChange={handleChange}
                    />

                    <label htmlFor="transmissao">Adicione a transmissão do carro:</label>
                    <select
                        className='form-select'
                        onChange={handleChange}
                        value={dados.transmissao}
                        id='transmissao'>

                        {transmissao.map(dados => (
                            <option value={dados.id} key={dados.id} >
                                {dados.nome_transmissao}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="linkIMG">Adicione algum link de alguma imagem do carro:</label>
                    <input
                        type="text"
                        className='form-control'
                        id='linkIMG'
                        value={dados.linkIMG}
                        onChange={handleChange}
                    />
                    <label htmlFor="dados-img"><b>A imagem inserida acima aparecerá aqui:</b></label> <br />
                    <img src={dados.linkIMG} />
                    <br />
                    <label htmlFor="anoProducao">Adicione o ano de produção:</label>
                    <input
                        type="text"
                        className='form-control'
                        id='anoProducao'
                        value={dados.anoProducao}
                        onChange={handleChange}
                    />

                    <label htmlFor="anoLancamento">Adicione o ano de lançamento:</label>
                    <input
                        type="text"
                        className='form-control'
                        id='anoLancamento'
                        value={dados.anoLancamento}
                        onChange={handleChange}
                    />


                    <label htmlFor="combustivel">Adicione o tipo de combustivel:</label>
                    <select
                        className='form-select'
                        onChange={handleChange}
                        value={dados.combustivel}
                        id='combustivel'>

                        {combustiveis.map(dados => (
                            <option value={dados.id} key={dados.id} >
                                {dados.nome_combustivel}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="porta">Adicione a quantidade de portas:</label>
                    <input
                        type="text"
                        className='form-control'
                        id='porta'
                        value={dados.porta}
                        onChange={handleChange}
                    />


                    <label htmlFor="motor">Adicione o tipo de motor:</label>
                    <input
                        type="text"
                        className='form-control'
                        id='motor'
                        placeholder='ex: 1.3'
                        value={dados.motor}
                        onChange={handleChange}
                    />


                    <label htmlFor="carroceria">Adicione o tipo de carroceria:</label>
                    <input
                        type="text"
                        className='form-control'
                        id='carroceria'
                        placeholder='ex: sedan'
                        value={dados.carroceria}
                        onChange={handleChange}
                    />

                    <label htmlFor="pilotoAutomatico">O carro tem piloto automâtico?</label>
                    <select
                        id="pilotoAutomatico"
                        className='form-select'
                        value={dados.pilotoAutomatico}
                        onChange={handleChange}
                    >

                        <option value="true">Sim</option>
                        <option value="false">Não</option>
                    </select>

                    <label htmlFor="climatizador">O carro tem climatizador</label>
                    <select
                        id="climatizador"
                        className='form-select'
                        value={dados.climatizador}
                        onChange={handleChange}
                    >

                        <option value="true">Sim</option>
                        <option value="false">Não</option>
                    </select>

                    <label htmlFor="vidro">O carro tem vidro automâtico?</label>
                    <select
                        id="vidro"
                        className='form-select'
                        value={dados.vidro}
                        onChange={handleChange}
                    >

                        <option value="true">Sim</option>
                        <option value="false">Não</option>
                    </select>

                    <label htmlFor="am_fm">O carro tem rádio AM e FM</label>
                    <select
                        id="am_fm"
                        className='form-select'
                        value={dados.am_fm}
                        onChange={handleChange}
                    >

                        <option value="true">Sim</option>
                        <option value="false">Não</option>
                    </select>

                    <label htmlFor="auxiliar">O carro tem entrada auxiliar?</label>
                    <select
                        id="auxiliar"
                        className='form-select'
                        value={dados.auxiliar}
                        onChange={handleChange}
                    >

                        <option value="true">Sim</option>
                        <option value="false">Não</option>
                    </select>

                    <label htmlFor="bluetooth">O carro tem Bluetooth?</label>
                    <select
                        id="bluetooth"
                        className='form-select'
                        value={dados.bluetooth}
                        onChange={handleChange}
                    >

                        <option value="true">Sim</option>
                        <option value="false">Não</option>
                    </select>

                    <label htmlFor="cd_player">O carro tem CD Player?</label>
                    <select
                        id="cd_player"
                        className='form-select'
                        value={dados.cd_player}
                        onChange={handleChange}
                    >

                        <option value="true">Sim</option>
                        <option value="false">Não</option>
                    </select>

                    <label htmlFor="dvd_player">O carro tem DVD Player?</label>
                    <select
                        id="dvd_player"
                        value={dados.dvd_player}
                        className='form-select'
                        onChange={handleChange}
                    >

                        <option value="true">Sim</option>
                        <option value="false">Não</option>
                    </select>

                    <label htmlFor="usb">O carro tem entrada USB?</label>
                    <select
                        id="usb"
                        className='form-select'
                        value={dados.usb}
                        onChange={handleChange}
                    >

                        <option value="true">Sim</option>
                        <option value="false">Não</option>
                    </select>

                    <label htmlFor="mp3">O carro tem leitor MP3?</label>
                    <select
                        id="mp3"
                        className='form-select'
                        value={dados.mp3}
                        onChange={handleChange}
                    >

                        <option value="true">Sim</option>
                        <option value="false">Não</option>
                    </select>

                    <button type='submit' className='btn btn-primary btn-lg my-2'>Enviar dados</button>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default addVeiculo
