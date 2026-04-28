import profileImg from "../../assets/Moh_profilbilde.jpg";

export default function Moh() {
  {/* returnerer profilartikkelen som inneholder bilde, tekst og lenker*/}
  return (
    <article
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1.5rem",
        background: "#eef6ff",
        padding: "1.5rem",
        borderRadius: "12px",
        maxWidth: "500px",
        margin: "auto",
      }}
    >
      
      {/* profilbilde og alternativ tekst*/}
      <img
        src={profileImg}
        alt="Moh profilbilde"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
        }}
      />

      {/* navnet på profilen*/}
      <section style={{ textAlign: "left" }}>
        <h2 style={{ margin: 0 }}>Mohamed Hirey</h2>

        {/* Mail lenke*/}
        <a href="mailto:hireyselskap@gmail.com">
          hireyselskap@gmail.com
        </a>

        {/* navnet på studiet*/}
        <p>Digital medie & design</p>
      </section>
    </article>
  );
}


{/* <a href="mailto:hireyselskap@gmail.com?subject=Hei">
        hireyselskap@gmail.com
        </a> */}