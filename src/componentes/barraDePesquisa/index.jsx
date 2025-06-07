import { useState } from "react";
import "./styles.css";

export default function BarraDePesquisa() {
  const [termoDePesquisa, setTermoDePesquisa] = useState("");
  return (
    <input
      type="search"
      placeholder="Digite oque você procura"
      className="barra-pesquisa"
      value={termoDePesquisa}
      onChange={(e) => setTermoDePesquisa(e.target.value)}
    />
  );
}
