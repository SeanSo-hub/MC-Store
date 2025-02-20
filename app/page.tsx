import NavBar from "./components/Header/NavBar";
import Hero from "./components/Main/Hero";
import Feature from "./components/Main/Feature";
import Deals from "./components/Main/Deals";
import Newsletter from "./components/Main/Newsletter";
import Footer from "./components/Footer/Footer";

export default function index() {
  return (
    <div>
      <main>
        <header>
          <NavBar />
        </header>
        <main>
          <Hero />
          <Feature />
          <Deals />
          <Newsletter />
          <Footer />
        </main>
      </main>
    </div>
  );
}
