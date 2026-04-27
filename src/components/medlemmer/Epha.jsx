import profileImg from "../../assets/epha_p_bilde.png";
export default function Epha() {
  return (
    <section>
        {/* <img src="src/assets/epha_p_bilde.png" /> */}
        <img src={profileImg} alt="Epha profilbilde" />
        {/* /> */}

        <h2>Epha</h2>
        
        <p>
            <a href="mailto:ephantuh@hiof.no">ephantuh@hiof.no</a>
        </p>
        <p>Digital mediedesign</p>
    </section>
    );
}