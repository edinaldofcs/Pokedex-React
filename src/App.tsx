import { Footer } from "./pages/footer";
import { Header } from "./pages/header";
import { Home } from "./pages/home";
import ContextProvider from "./context/context";

function App() {

  return (
    <ContextProvider>
      <Header />
      <Home />
      <Footer />
    </ContextProvider>
  );
}

export default App;
