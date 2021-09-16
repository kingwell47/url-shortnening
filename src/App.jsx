import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Shortener from "./components/shortener/Shortener";

function App() {
  return (
    <div className='App'>
      <Header />
      <Shortener />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
