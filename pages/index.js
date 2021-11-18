import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Index.module.css'
import { Carousel } from "react-bootstrap";



export default function Home({posts}) {
  console.log(posts)
  return (
    <div className={styles.container}>
      <Head>
        <title>Proaktif</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Proaktif Resmi Web Sitesi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        ></link>
        <link
          rel="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"
          integrity="sha384-eMNCOe7tC1doHpGoWe/6oMVemdAVTMs2xqW4mwXrXsW0L84Iytr2wi5v2QjrP/xp"
          crossorigin="anonymous"
        ></link>
        <link
          rel="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js"
          integrity="sha384-cn7l7gDp0eyniUwwAZgrzD06kc/tftFf19TOAs2zVinnD/C7E91j9yyk5//jjpt/"
          crossorigin="anonymous"
        ></link>
      </Head>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/sliders/slider1.jpg"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/sliders/slider2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/sliders/slider3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/sliders/slider4.jpg"
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>

      <main className={styles.main}>
        <div className={styles.homebuttons}>
        <a target="target" href="https://gumruksistemdurumu.org/">
          <button className={styles.homebutton}>Gümrük Sistemi Durumu</button> </a>
          <button className={styles.homebutton}>Eğitim Destekleri</button>
          <button className={styles.homebutton}>Demo Oluştur</button>
          <button className={styles.homebutton}>Sertifika Kontrol</button>
          <button className={styles.homebutton}>Sunucu Arama</button>
        </div>

        <div className={styles.center} id={styles.info1}>
          "Olası sorunlara
          <p> öncesinde </p>
          çözümler üretiyoruz!"
        </div>
        <style jsx>{`
          p {
            margin: 5px;
            font-weight: 700;
          }
        `}</style>

        <div className={styles.center} id={styles.info2}>
          <div className={styles.infoheader}>
            <p>
              {" "}
              Nitelikli yazılım, yönetim ve bilişim çözümlerimiz ile
              üretken,kârlı ve <br />
              sürekli bir gelişim için proaktif vizyon.
            </p>
          </div>
        </div>

        <div className={styles.infoprops}>
          <div className={styles.infoprop}>
            <div className={styles.propelement}>
              <div className={styles.infopropheader}>
                Sosyal Sorumluluk Projeleri
              </div>
              <div className={styles.propexplanation}>
                Var gücümüzle 'Eğitim' diyoruz.
              </div>
            </div>

            <div className={styles.propelement}>
              <div className={styles.infopropheader}>
                Dış Ticaret Yönetim Sistemi
              </div>
              <div className={styles.propexplanation}>
                Yer ve zamandan bağımsız olarak ithalat, ihracat, antrepo,
                transit, özet beyan ve NCTS gibi tüm işlemlerinizi hızlıca
                gerçekleştirin!
              </div>
            </div>

            <div className={styles.propelement}>
              <div className={styles.infopropheader}>
                DontBeCloser <br /> (DahaYakınOlma) Projesi
              </div>
              <div className={styles.propexplanation}>
                DBC DontBeCloser (DahaYakınOlma) mobil uygulaması ve web
                yazılımı ile kendinizi güvene alın.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.statistics}>
          <div className={styles.statisticstitle}>
            "Rakamlarla Şirketimiz"
            <div className={styles.subhead}>Birkaç İstatistik</div>
          </div>

          <div className={styles.general}>
            <div className={styles.statisticsdiv}>
              <div className={styles.statistic}>
                <div className={styles.statisticcount}>
                  <span>26</span>+
                </div>
                <div className={styles.statistictext}>Yıllık Deneyim</div>
              </div>

              <div className={styles.statistic}>
                <div className={styles.statisticcount}>
                  <span>17000000</span>+
                </div>
                <div className={styles.statistictext}>Beyanname</div>
              </div>

              <div className={styles.statistic}>
                <div className={styles.statisticcount}>
                  <span>7800</span>+
                </div>
                <div className={styles.statistictext}>Kullanıcı</div>
              </div>

              <div className={styles.statistic}>
                <div className={styles.statisticcount}>
                  <span>16000</span>+
                </div>
                <div className={styles.statistictext}>Öğrenciye Hizmet</div>
              </div>
            </div>
          </div>
        </div>

        

      </main>
    </div>
  )

  
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const posts = await res.json();

  return {
   props: {
      posts,
    },
  }
}


