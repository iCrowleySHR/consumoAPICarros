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

export const testeMarca = () => {
  return fetch('http://localhost/github/ApiCarros/api/v1/brands')
    .then(resposta => resposta.json())
    .then(dados => {
        dados.forEach(dadosAPI => {
          if(dadosAPI.id == '2'){
            console.log(dadosAPI.nome_marca)
          }
        });
    })
    .catch(erro => {
      console.error('Erro ao buscar dados da API:', erro);
    });
};

/*======================================================================================================================= */


























/*ENVIAR DADOS PARA API */
export function submit(dados){
    // fetch('http://localhost/github/ApiCarros/api/v1/cars', {
    //     method: 'POST',
    //     headers:{
    //         "Content-Type": "application/json",
    //         'email':'admin@email.com',
    //         'senha':'admin'
    //     },
    //     body:JSON.stringify(dados)
    //   })
    //     .then(resposta => resposta.json())
    //     .then(dadosAPI => {
    //         console.log(dadosAPI)
    //     })
    console.log(dados)
}

// "veiculos": [
//   {
//       "id": 5,
//       "valor": "215990.66",
//       "id_marca": 3,
//       "marca": "Chevrolet",
//       "id_modelo": 18,
//       "modelo": "Camaro",
//       "versao": "Ev 66 kw Elétrico",
//       "imagens": [
//           "https://http2.mlstatic.com/D_NQ_NP_657050-MLB73629919458_122023-O.webp",
//           null,
//           null
//       ],
//       "ano": {
//           "producao": 2023,
//           "lancamento": 2024
//       },
//       "combustivel": "Elétrico",
//       "portas": 4,
//       "transmissao": "Automática",
//       "motor": "0.0",
//       "carroceria": "",
//       "conforto": {
//           "piloto_automatico": true,
//           "climatizador": true,
//           "vidro_automatico": true
//       },
//       "entretenimento": {
//           "am_fm": true,
//           "entrada_auxiliar": true,
//           "bluetooth": true,
//           "cd_player": true,
//           "dvd_player": true,
//           "leitor_mp3": true,
//           "entrada_usb": true
//       }
//   }