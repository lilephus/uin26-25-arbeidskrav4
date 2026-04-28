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