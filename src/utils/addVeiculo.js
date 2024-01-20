let linkAPI = "http://localhost/github/ApiCarros/api/v1/cars"




/*Pegar dados da api */
export const fetchCombustiveis = () => {
    return fetch('http://localhost/github/ApiCarros/api/v1/fuels')
      .then(resposta => resposta.json())
      .catch(erro => {
        console.error('Erro ao buscar dados da API:', erro);
      });
  };

/*enviar dados para a api */
export function submit(dados){
    fetch(linkAPI, {
        method: 'POST',
        headers:{
            "Content-Type": "application/json",
            'email':'admin@email.com',
            'senha':'admin'
        },
        body:JSON.stringify(dados)
      })
        .then(resposta => resposta.json())
        .then(dadosAPI => {
            console.log(dadosAPI)
        })

}

// {
// 	"valor": "54890.55",
// 	"id_modelo": 4,
//     "id_combustivel": 2,
//     "id_transmissao": 1,
// 	"versao": "1.8 LT SPORT6 16V FLEX 4P MANUAL",
// 	"imagem_um": "https://http2.mlstatic.com/D_NQ_NP_732550-MLB73912531540_012024-O.webp",
// 	"imagem_dois": "https://http2.mlstatic.com/D_NQ_NP_724354-MLB73912531550_012024-O.webp",
// 	"imagem_tres":null,
// 	"ano_producao": 2013,
//  "ano_lancamento": 2013,
// 	"portas": 4,
// 	"motor": "1.8",
// 	"carroceria": "Hatch",
// 	"piloto_automatico": false,
// 	"climatizador": true,
// 	"vidro_automatico": true,
// 	"am_fm": true,
// 	"entrada_auxiliar": false,
// 	"bluetooth": false,
// 	"cd_player": false,
// 	"dvd_player": false,
// 	"leitor_mp3": false,
// 	"entrada_usb": false
// }