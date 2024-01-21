/*PEGAR DADOS SOBRE AS MARCAS NA API*/
export const fetchMarcas = () => {
  return fetch('http://localhost/github/ApiCarros/api/v1/brands')
    .then(resposta => resposta.json())
    .catch(erro => {
      console.error('Erro ao buscar dados da API:', erro);
    });
};

/*======================================================================================================================= */
/*PEGAR DADOS SOBRE OS COMBUSTIVEIS*/
export const fetchCombustiveis = () => {
  return fetch('http://localhost/github/ApiCarros/api/v1/fuels')
    .then(resposta => resposta.json())
    .catch(erro => {
      console.error('Erro ao buscar dados da API:', erro);
    });
};

/*======================================================================================================================= */
/*PEGAR DADOS SOBRE TRANSMISSÃO */
export const fetchTransmissão = () => {
  return fetch('http://localhost/github/ApiCarros/api/v1/transmissions')
    .then(resposta => resposta.json())
    .catch(erro => {
      console.error('Erro ao buscar dados da API:', erro);
    });
};

/*======================================================================================================================= */
/*ENVIAR DADOS PARA API */
export function submit(dadosUsuario) {
  let username = '123'
  let password = '123'

  const credentials = btoa(`${username}:${password}`);
  console.log(credentials)

  let valoresEnviar = [
    {
      "valor": dadosUsuario.valor,
      "id_modelo": 4,
      "id_combustivel": dadosUsuario.combustivel,
      "id_transmissao": dadosUsuario.transmissao,
      "versao": dadosUsuario.versao,
      "imagem_um": dadosUsuario.linkIMG,
      "imagem_dois": null,
      "imagem_tres": null,
      "ano_producao": dadosUsuario.anoProducao,
      "ano_lancamento": dadosUsuario.anoLancamento,
      "portas": dadosUsuario.porta,
      "motor": dadosUsuario.motor,
      "carroceria": dadosUsuario.carroceria,
      "piloto_automatico": dadosUsuario.pilotoAutomatico,
      "climatizador": dadosUsuario.climatizador,
      "vidro_automatico": dadosUsuario.vidro,
      "am_fm": dadosUsuario.am_fm,
      "entrada_auxiliar": dadosUsuario.auxiliar,
      "bluetooth": dadosUsuario.bluetooth,
      "cd_player": dadosUsuario.cd_player,
      "dvd_player": dadosUsuario.dvd_player,
      "leitor_mp3": dadosUsuario.mp3,
      "entrada_usb": dadosUsuario.usb
    }
  ];

  console.log(valoresEnviar)

  fetch('http://localhost/github/ApiCarros/api/v1/cars', {
      method: 'POST',
      headers: {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${credentials}`,
  },
      body:JSON.stringify({
        "valor": "54890.55",
        "id_modelo": 4,
        "id_combustivel": 2,
        "id_transmissao": 1,
        "versao": "1.8 LT SPORT6 16V FLEX 4P MANUAL",
        "imagem_um": "https://http2.mlstatic.com/D_NQ_NP_732550-MLB73912531540_012024-O.webp",
        "imagem_dois": "https://http2.mlstatic.com/D_NQ_NP_724354-MLB73912531550_012024-O.webp",
        "imagem_tres": null,
        "ano_producao": 2013,
        "ano_lancamento": 2013,
        "portas": 4,
        "motor": "1.8",
        "carroceria": "Hatch",
        "piloto_automatico": false,
        "climatizador": true,
        "vidro_automatico": true,
        "am_fm": true,
        "entrada_auxiliar": false,
        "bluetooth": false,
        "cd_player": false,
        "dvd_player": false,
        "leitor_mp3": false,
        "entrada_usb": false
      })
    })
      .then(resposta => resposta.json())
      .then(resultadoEnvio => {
        console.log(resultadoEnvio)
      })




}
