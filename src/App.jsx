import Header from "./components/layout/header";
// import Footer from "./components/layout/footer";
import Epha from "./components/medlemmer/epha";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="medlemmer">
          <Epha />
        </section>
      </main>
        {/* <Footer /> */}
    </>
  );
}

export default App;