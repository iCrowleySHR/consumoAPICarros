let linkAPI = "http://localhost/github/ApiCarros/api/v1/cars"
export function submit(dados){
    fetch("http://localhost/github/ApiCarros/api/v1/cars", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost'
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
            'Access-Control-Allow-Headers': 'Content-Type'
            'Access-Control-Allow-Credentials': 'true'
          }
      })
        .then(resposta => resposta.json())
        .then(dadosAPI => {
            console.log(dadosAPI)
        })

}