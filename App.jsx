import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nisa SERT</h1>
        <p>Kişisel CV'm</p>
      </header>

      <section className="contact">
        <h2>İletişim</h2>
        <ul>
          <li>Email: nisasert80@gmail.com</li>
          <li>Telefon: +5528381114</li>
          <li>Adres: Nevşehir, Türkiye</li>
        </ul>
      </section>

      <section className="experience">
        <h2>Deneyim</h2>
        <ul>
          <li>
            <h3>Nevşehir Adalet Sarayı</h3>
            <p><strong>Zabıt Katibi</strong> - 2023 - Günümüz</p>
            <p>Birimi: Nevşehir Sulh Hukuk ve Kadastro Mahkemesi</p>
          </li>
        </ul>
      </section>

      <section className="skills">
        <h2>Yetenekler</h2>
        <ul>
          <li>C# Programlama</li>
          <li>Node.js</li>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>Git</li>
        </ul>
      </section>

      <section className="skills">
        <h2>Sertifikalarım</h2>
        <ul>
          <li>Türk İşaret Dili</li>
          <li>Bilgisayar İşletmenliği ve Operatörlüğü</li>
          <li>Diksiyon, Spikerlik ve Sunuculuk</li>
          <li>İngilizce A1 Seviye</li>
          <li>İngilizce A2 Seviye</li>
          <li>Medya Okuryazarlığı</li>
          <li>Bilgisayarda Hızlı Klavye Kullanımı</li>
        </ul>
      </section>

      <section className="education">
        <h2>Eğitim</h2>
        <ul>
          <li>
            <h3>Kapadokya Üniversitesi</h3>
            <p><strong>Bilgisayar Programcılığı</strong> - 2023 - 2025</p>
            <h3>Özel Kardelen Fen Lisesi</h3>
            <p><strong>2018 - 2022</strong></p>
          </li>
        </ul>
      </section>


      <section className="skills">
        <h2>Beceriler</h2>
        <ul>
          <li>İkna Becerisi</li>
          <li>Proje Yönetimi</li>
        </ul>
      </section>


      <section className="education">
        <h2>Sosyal Medya Hesaplarım</h2>
        <a href="https://www.facebook.com/profile.php?id=100011220758531&locale=tr_TR" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://www.linkedin.com/in/nisa-sert-a6b678296/" target="_blank" rel="noopener noreferrer">
          -Linkedin
        </a>
      </section>


    </div>
  );
}

export default App;
