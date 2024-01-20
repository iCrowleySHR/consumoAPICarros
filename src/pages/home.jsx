import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/home.css'
function Home() {
  return (
    <>
      <Header/>
        <main>
            <section className='text-center py-4 welcome'>
                <h1>Bem vindo ao APICarros.</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, ab ex. Odio nisi ad dolores libero odit eius perspiciatis voluptatibus? Nobis quas libero nisi? Iure praesentium officiis vel tempore vitae!</p>
                <img src="https://i.pinimg.com/originals/e5/27/d6/e527d6ec5e7796f2d19d87a949cedfa7.gif" alt="image car"/>
            </section>

            <section className='container d-flex justify-content-between mt-5'>
              <article className='mt-1'>
                <h1>A API feita para quem gosta de carros.</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus necessitatibus expedita inventore
                  error quod consectetur maxime, debitis dignissimos. Repellat vero necessitatibus unde odit cumque sapiente eaque minus
                  ipsam laborum suscipit.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odio rem quisquam harum unde error quasi delectus asperiores
                  nostrum deleniti possimus quidem commodi quo quas aut similique veniam, labore libero?
                </p>
              </article>
              
              <img src="https://i.pinimg.com/originals/9d/73/d0/9d73d089a72a0f2dc893c2f63561d779.gif" alt="a image car"  className='img-txt'/>
            </section>

            <section className='container d-flex justify-content-between mt-5'>
              <img src="https://usagif.com/wp-content/uploads/gifs/race-car-6.gif" alt="a image car"  className='img-txt  me-5'/>

                <article className='mt-1'>
                  <h1 className='title'>A API feita para quem gosta de carros.</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus necessitatibus expedita inventore
                    error quod consectetur maxime, debitis dignissimos. Repellat vero necessitatibus unde odit cumque sapiente eaque minus
                    ipsam laborum suscipit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odio rem quisquam harum unde error quasi delectus asperiores
                    nostrum deleniti possimus quidem commodi quo quas aut similique veniam, labore libero?
                  </p>
                </article>
            </section>

            <section className='text-center py-4 mt-5 documentation'>
              <h1>Documentação</h1>
              <p>
                Confira toda a documentação do projeto clicando <a href="/documentacao">AQUI!</a>
              </p>
              <img src="https://cdn.dribbble.com/users/1708816/screenshots/15637256/media/f9826f0af8a49462f048262a8502035b.gif" alt="gif image"/>
            </section>
        </main>
      <Footer/>
    </>
  )
}

export default Home
