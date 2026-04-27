import Header from "./components/layout/header";
// import Footer from "./components/layout/footer";
import Medlemmer from "./components/medlemmer/medlemmer";
import ArbeidskravListe from "./components/arbeidskrav/ArbeidskravListe";


function App() {
  return (
    <>
      <Header />

      <main>
        <Medlemmer />
        <ArbeidskravListe />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;


// Importerer Header, medlemmer hvor alle profil jsx skal/ligger, 
// importerer ArbeidskravListe med sanity data, function app som 
// returnerer header og main hvor main inneholder medlemmer og arbeidskravliste. Eksporterer app som default.