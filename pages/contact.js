import React from "react";
import styles from "../styles/Links.module.css";

const contact = () => {
  return (
    <div>
      <div className={styles.contactbody}>
        <div className={styles.iframe}>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed/v1/place?q=Proaktif%20Dijital%20Y%C3%B6netim%20ve%20E%C4%9Fitim%20Sistemleri%20Ltd.%20%C5%9Eti.&key=AIzaSyDj7NqozXRR1OB7znxR85Qp6OvXpKyOmbw"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className={styles.projecttitle}>
        Proaktif Dijital Yönetim ve Eğitim Sistemleri Ltd. Şti.
      </div>
      <div className={styles.argeprojectdesccont}>
        <div className={styles.argeprojectdesc}>
          Kocaeli Üniversitesi Teknoloji Geliştirme Bölgesi Vatan Cad., No: 83 /
          B-34 Yeniköy Merkez Mah., Başiskele 41725 Kocaeli/Turkey
          <hr />
        </div>
      </div>
      <style jsx>{`
        hr {
          width: 20%;
          height: 3px;
          background-color: rgb(40, 67, 148);
          margin-left: 0px;
        }
      `}</style>
      <div className={styles.argeprojectdesccont}>
        <div className={styles.argeprojectdesc}>
          Telefon: 0850 333 00 61 - 0533 766 11 42 <br /> Mail:info@proaktif.org
          <br /> KEP Adresi: proaktifdijital@hs05.kep.tr <br /> Mersis Numarası:
          0733088785300001
          <br />
          Tepecik V.D. 733 088 7853
          <hr />
        </div>
      </div>
      <div className={styles.whatsapp}>Whatsapp Destek</div>
      <div>
        <img src="/images/wp_qr_code.jpg" />
      </div>
    </div>
  );
};

export default contact;
