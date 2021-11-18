import styles from '../../styles/Header.module.css';
import Image from 'next/image'

export default function Header() {
    return (
        <main className={styles.main}>
      
      <div className={styles.header}>
      <h1 className={styles.title}> 
           <img src="/icon/favicon.ico" alt="Proaktif Logo" /> P R O A K T İ F

           
        </h1>
        <style jsx>{`
          img {
            height:60px;
            width:46.15px;
          }
        `}</style>
      </div>
      </main>
    )
}