import profileImg from "../../assets/epha_p_bilde.png";

export default function Epha() {
  return (
    <section id="medlemm-card">
        {/* <article> */}
        {/* <img src="src/assets/epha_p_bilde.png" /> */}
              {/* <img src="/src/assets/epha_p_bilde.png" alt="Epha" /> */}
              {/* <img src={ephaImg} alt="Epha" /> */}
      <img src={profileImg} alt="Epha profilbilde" />

 <article id="medlemm-info">
      {/* <h2>Ephantus Hansen</h2> */}
        <h2 id="epha-name">Ephantus Hansen</h2>


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