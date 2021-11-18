import styles from "../../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.iletisimcont}>
        <div className={styles.iletisim}>
          <div className={styles.aboutcount}>
            <div className={styles.aboutheader}>Proaktif</div>
            <div className={styles.abouttext}>
              Ar-Ge projeleri ile tüm sistem ve yazılım çözümlerinin yanı sıra
              Proaktif olarak ülke gerçeklerinin ve kurucu ortak aklın ışığı
              doğrultusunda, sosyal sorumluk bilinci ile özellikle
              öğrencilerimize ve okullara aynî, nakdî ya da eğitim-öğretim
              destekleri sağlamak üzere projeler gerçekleştirmek önemli bir
              hedef teşkil etmektedir.
            </div>
          </div>
          <div className={styles.iletisimchildcont}>
            <div className={styles.insidelink}>Yönlendirme</div>
            <a href="http://localhost:3000/corporate">
              <div className={styles.textlink}>Kurumsal</div>
            </a>

            <a href="http://localhost:3000/products">
              <div className={styles.textlink}>Ürünlerimiz</div>
            </a>

            <a href="http://localhost:3000/argeprojects">
              <div className={styles.textlink}>Projelerimiz</div>
            </a>

            <a href="http://localhost:3000/collabrations">
              <div className={styles.textlink}>İş Birliklerimiz</div>
            </a>

            <a href="http://localhost:3000/contact">
              <div className={styles.textlink}>İletişim</div>
            </a>

            <a target="target" href="https://kouteknopark.com/">
              <div className={styles.textlink}>
                Kocaeli Üniversitesi Teknopark
              </div>
            </a>
          </div>
          <style jsx>{`
            a {
              color: #007bff;
              background-color: transparent;
              text-decoration: none;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}
