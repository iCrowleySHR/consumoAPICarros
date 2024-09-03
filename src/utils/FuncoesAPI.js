let linkBase = ''
/*PEGAR DADOS SOBRE AS MARCAS NA API*/
export const fetchMarcas = () => {
  return fetch(`${linkBase}/api/v1/brands`)
    .then(resposta => resposta.json())
    .catch(erro => {
      console.error('Erro ao buscar dados da API:', erro);
    });
};

/*======================================================================================================================= */
/*PEGAR DADOS SOBRE OS COMBUSTIVEIS*/
export const fetchCombustiveis = () => {
  return fetch(`${linkBase}/api/v1/fuels`)
    .then(resposta => resposta.json())
    .catch(erro => {
      console.error('Erro ao buscar dados da API:', erro);
    });
};

/*======================================================================================================================= */
/*PEGAR DADOS SOBRE TRANSMISSÃO */
export const fetchTransmissao = () => {
  return fetch(`${linkBase}/api/v1/transmissions`)
    .then(resposta => resposta.json())
    .catch(erro => {
      console.error('Erro ao buscar dados da API:', erro);
    });
};

/*======================================================================================================================= */
/*PEGAR DADOS SOBRE MODELOS */
export const fetchModelo = () => {
  return fetch(`${linkBase}/api/v1/carmodels`)
    .then(resposta => resposta.json())
    .catch(erro => {
      console.error('Erro ao buscar dados da API:', erro);
    });
};

/*======================================================================================================================= */
/*PEGAR DADOS SOBRE VEICULOS */
export const fetchCarro = () => {
  return fetch(`${linkBase}/api/v1/cars`)
    .then(resposta => resposta.json())
    .catch(erro => {
      console.error('Erro ao buscar dados da API:', erro);
    });
};

/*======================================================================================================================= */
/*ENVIAR DADOS PARA API VEICULO*/
export function submitVeiculo(dadosUsuario) {
  let username = 'admin@email.com'
  let password = 'admin'
  const credentials = btoa(`${username}:${password}`);

  let valoresEnviar = 
    {
      "valor": dadosUsuario.valor,
      "id_modelo": dadosUsuario.modelo,
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
    };

  console.log(valoresEnviar)

  return fetch(`${linkBase}/api/v1/cars`, {
      method: 'POST',
      headers: {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${credentials}`,
  },
      body:JSON.stringify(valoresEnviar)
    })
      .then(resposta => resposta.json())
      .then(resultadoEnvio => {
        return resultadoEnvio.success
      })
}
/*======================================================================================================================= */
/*ENVIAR DADOS PARA API COMBUSTIVEL*/
export function submitCombustivel(dadosUsuario) {
  let username = 'admin@email.com'
  let password = 'admin'
  const credentials = btoa(`${username}:${password}`);

  let valoresEnviar = {
    "nome_combustivel": dadosUsuario.combustivel
}
  
  return fetch(`${linkBase}/api/v1/fuels`, {
      method: 'POST',
      headers: {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${credentials}`,
  },
      body:JSON.stringify(valoresEnviar)
    })
      .then(resposta => resposta.json())
      .then(resultadoEnvio => {
        return resultadoEnvio.success
      })
}

/*======================================================================================================================= */
/*ENVIAR DADOS PARA API TRANSMISSAO*/
export function submitTransmissao(dadosUsuario) {
  let username = 'admin@email.com'
  let password = 'admin'
  const credentials = btoa(`${username}:${password}`);

  let valoresEnviar = {
    "nome_transmissao": dadosUsuario.transmissao
}
  
  return fetch(`${linkBase}/api/v1/transmissions`, {
      method: 'POST',
      headers: {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${credentials}`,
  },
      body:JSON.stringify(valoresEnviar)
    })
      .then(resposta => resposta.json())
      .then(resultadoEnvio => {
        return resultadoEnvio.success
      })
}

/*======================================================================================================================= */
/*ENVIAR DADOS PARA API MARCA*/
export function submitMarca(dadosUsuario) {
  let username = 'admin@email.com'
  let password = 'admin'
  const credentials = btoa(`${username}:${password}`);

  let valoresEnviar = {
    "nome_marca": dadosUsuario.marca
}
  
  return fetch(`${linkBase}/api/v1/brands`, {
      method: 'POST',
      headers: {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${credentials}`,
  },
      body:JSON.stringify(valoresEnviar)
    })
      .then(resposta => resposta.json())
      .then(resultadoEnvio => {
        return resultadoEnvio.success
      })
}

/*======================================================================================================================= */
/*ENVIAR DADOS PARA API MODELO*/
export function submitModelo(dadosUsuario) {
  let username = 'admin@email.com'
  let password = 'admin'
  const credentials = btoa(`${username}:${password}`);

  let valoresEnviar = {
      "id_marca": dadosUsuario.id_marca,
      "nome_modelo": dadosUsuario.modelo
  }

  console.log(valoresEnviar)
  
  return fetch(`${linkBase}/api/v1/carmodels`, {
      method: 'POST',
      headers: {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${credentials}`,
  },
      body:JSON.stringify(valoresEnviar)
    })
      .then(resposta => resposta.json())
      .then(resultadoEnvio => {
        return resultadoEnvio.success
      })
}