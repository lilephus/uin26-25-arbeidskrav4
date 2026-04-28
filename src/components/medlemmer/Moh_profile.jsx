import profileImg from "../../assets/Moh_profilbilde.jpg"

export default function Moh() {
  return (
    <section id="medlemm-card">
        
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