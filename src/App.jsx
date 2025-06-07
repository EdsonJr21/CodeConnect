import "./App.css";
import Card from "./card";
import BarraDePesquisa from "./componentes/barraDePesquisa";
import SideBar from "./componentes/sideBar";
import Filtros from "./filtros";
import Recentes from "./componentes/recentes";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes"
    )
      .then((resposta) => resposta.json())
      .then((dados) => setDados(dados));
  }, []);

  return (
    <div className="container">
      <SideBar />
      <div>
        <BarraDePesquisa />
        <Filtros />
        <Recentes />
        <ul className="lista-cards">
          {dados
            ? dados.map((item, index) => (
                <li key={index}>
                  <Card
                    id={item.id}
                    imagemUrl={item.imagem_capa}
                    titulo={item.titulo}
                    resumo={item.resumo}
                    codigo={item.linhas_de_codigo}
                    compartilhamentos={item.compartilhamentos}
                    comentarios={item.comentarios}
                    usuario={item.usuario}
                  />
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}

export default App;
