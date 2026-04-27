import Header from "./components/layout/header";
// import Footer from "./components/layout/footer";
import medlemmer from "./components/medlemmer/epha";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="medlemmer">
          <epha />
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;