let linkAPI = "http://localhost/github/ApiCarros/api/v1/cars"
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