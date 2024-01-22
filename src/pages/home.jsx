import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/home.css'
function Home() {
  return (
    <>
      <Header/>
        <main>
            <section className='text-center pt-4 welcome'>
                <h1>Bem vindo(a) ao 
                  <span className='text-effect'> APICarros</span>.
                </h1>
                <p>Venha! Adicione carros e inclua a nossa API no seu site! Nela você descobrirá todas as informações que um carro pode ter!</p>
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1fcd7937-324c-4714-9aae-04e3e5d404df/dgcvnee-ca89d39c-6b92-484d-8011-bb57e26e6322.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFmY2Q3OTM3LTMyNGMtNDcxNC05YWFlLTA0ZTNlNWQ0MDRkZlwvZGdjdm5lZS1jYTg5ZDM5Yy02YjkyLTQ4NGQtODAxMS1iYjU3ZTI2ZTYzMjIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gobrfXRh3q8e9sVZDtYFNwINT0pq4HXKs9l1P-tcGwY" alt="image car"/>
            </section>

            <section className='container d-flex justify-content-between mt-5 section-1'>
              <article className='mt-1'>
                <h1>A API feita para quem gosta de <span className='text-effect'>carros</span>.</h1>
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
                  <h1 className='title'>A API feita para quem gosta de <span className='text-effect'>carros</span>.</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus necessitatibus expedita inventore
                    error quod consectetur maxime, debitis dignissimos. Repellat vero necessitatibus unde odit cumque sapiente eaque minus
                    ipsam laborum suscipit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odio rem quisquam harum unde error quasi delectus asperiores
                    nostrum deleniti possimus quidem commodi quo quas aut similique veniam, labore libero?
                  </p>
                </article>
            </section>

            <marquee scrollamount="20" direction="right">
              <img src="https://static.wixstatic.com/media/eea52e_bee1cc506a7948b39878a0a72c4306a9~mv2.gif" alt="car running" width="200"/>
            </marquee>

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
