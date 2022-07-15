import { BrowserRouter } from "react-router-dom";

import { Navbar } from "./components/navbar";
import { Main } from "./components/content/main";
import { Footer } from "./components/footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Main />
      <Footer />
    </BrowserRouter>
  )
}

export default App;