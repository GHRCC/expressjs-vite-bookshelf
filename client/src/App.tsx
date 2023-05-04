import "./App.css";
import AppBar from "./Layout/AppBar.js";
import { EstanteHB } from "./Components/EstanteHb.js";
import { EditarLivro } from "./rotas/EditarLivros.js";

function App() {
  return (
    <div>
      <AppBar />
      <EstanteHB />
      <EditarLivro />
    </div>
  );
}

export default App;
