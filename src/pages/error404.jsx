import Header from '../components/header'
function error() {
  return (
    <>
      <Header/>
      <main class="text-center mt-4 ">
        <h1>Error 404</h1>
        <p>
            Parece que a página que você pesquisou não existe! <br/>
            Tente acessar outras páginas através do menu!
        </p>
      </main>
    </>
  )
}

export default error
