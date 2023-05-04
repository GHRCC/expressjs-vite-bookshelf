import "./App.css";
import AppBar from "./Layout/AppBar.js";
import { EstanteHB } from "./Components/EstanteHb.js";
import { EditarLivro } from "./rotas/EditarLivros.js";
import { EstanteEco } from "./Components/EstanteEconomia.js";

function App() {
  return (
    <div>
      <AppBar />
      <EstanteHB />
      <EstanteEco />
      <EditarLivro />
    </div>
  );
}

export default App;
