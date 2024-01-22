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
          <img src="https://lh3.googleusercontent.com/proxy/TFpO5ZB7UFOElhWiP8LQjX-yJ0RoIiWmf3Z2tbDIoiYDiAJ81fY38gMrqsFYn1pdf6G3mPYZYkvSSMg9L0oOIpjAqNf7_1u6drY7t3ug5ASL7-_zsqlrj43r8s7aEQoAlvFWh1d4SQ" alt="kids driving car"/>
        </main>
      <Footer/>
    </>
  )
}

export default Error
