let linkAPI = "http://localhost/github/ApiCarros/api/v1/cars"
export function submit(dados){
    fetch("http://localhost/github/ApiCarros/api/v1/cars", {
        method: 'GET',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
          }
      })
        .then(resposta => resposta.json())
        .then(dadosAPI => {
            console.log(dadosAPI)
        })

}