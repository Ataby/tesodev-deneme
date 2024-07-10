import styles from "./Footer.module.scss";
import footerImage from "../../assets/footerImage.png";
const Footer = () => {
  return (
    <div className={styles.footer} >

       <div className={styles.image}>
        <img src={footerImage} />
      </div>
      <div className={styles.contact}>
        <h1>İletişim</h1>
        <p>
          Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2
          Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
        </p>
        <p>
          <strong>Email: bilgi@tesodev.com</strong>
        </p>
      </div>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12039.667053575056!2d28.877491541339147!3d41.02707695648918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1str!2str!4v1664720853860!5m2!1str!2str"
          height="222"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
       
  );
};

export default Footer;
