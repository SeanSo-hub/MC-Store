import NavBar from "./components/Header/NavBar";
import Hero from "./components/Main/Hero";
import Feature from "./components/Main/Feature";
import Deals from "./components/Main/Deals";

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
        </main>
      </main>
    </div>
  );
}
