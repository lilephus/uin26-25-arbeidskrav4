import profileImg from "./assets/Moh_profilbilde.jpg"

export default function Moh() {
  return (
    <section id="medlemm-card">
        {/* <article> */}
        {/* <img src="src/assets/Moh_profilbilde.jpg" /> */}
              {/* <img src="/src/assets/Moh_profilbilde.png" alt="Epha" /> */}
              {/* <img src={ephaImg} alt="Moh" /> */}
      <img src={profileImg} alt="Moh profilbilde" />

 <article id="medlemm-info">
      {/* <h2>Ephantus Hansen</h2> */}
        <h2 id="moh-name">Mohamed Hirey</h2>


      <p>
        <a href="mailto:hansenbedrift@gmail.com">
            hansenbedrift@gmail.com
        </a>
      </p>

      <p>Digital medie & design</p>
      </article>
    </section>
  );
}


{/* <a href="mailto:hansenbedrift@gmail.com?subject=Hei">
        hansenbedrift@gmail.com
        </a> */}