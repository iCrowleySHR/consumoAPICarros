import Header from '../components/header'
import Footer from '../components/footer'
function Error() {
  return (
    <>
      <Header/>
        <main className="text-center mt-4">
          <h1>Error 404</h1>
          <p>
              Parece que a página que você pesquisou não existe! <br/>
              Tente acessar outras páginas através do menu!
          </p>
        </main>
      <Footer/>
    </>
  )
}

export default Error
