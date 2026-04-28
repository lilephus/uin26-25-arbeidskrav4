import profileImg from "../../assets/Moh_profilbilde.jpg"

export default function Moh() {
  return (
    <section id="medlemm-card">
        {/* <article> */}
        {/* <img src="src/assets/Moh_profilbilde.jpg" /> */}
              {/* <img src="/src/assets/Moh_profilbilde.png" alt="Moh" /> */}
              {/* <img src={ephaImg} alt="Moh" /> */}
      <img src={profileImg} alt="Moh profilbilde" />

 <article id="medlemm-info">
      {/* <h2>Mohamed Hirey</h2> */}
        <h2 id="moh-name">Mohamed Hirey</h2>


      <p>
        <a href="mailto:hireyselskap@gmail.com">
            hireyselskap@gmail.com
        </a>
      </p>

      <p>Digital medie & design</p>
      </article>
    </section>
  );
}


{/* <a href="mailto:hireyselskap@gmail.com?subject=Hei">
        hireyselskap@gmail.com
        </a> */}