import code from "./assets/code.svg";
import share from "./assets/share.svg";
import chat from "./assets/chat.svg";
import "./styles.css";

export default function Card({
  imagemUrl,
  titulo,
  resumo,
  codigo,
  compartilhamentos,
  comentarios,
  usuario,
}) {
  return (
    <article className="card">
      <div className="card__imagem">
        <img src={imagemUrl} alt="imagem do post" />
      </div>
      <div className="card__conteudo">
        <div className="card__texto">
          <h3>{titulo}</h3>
          <p>{resumo}</p>
        </div>
      </div>
      <div className="conteudo__rodape">
        <ul>
          <li>
            <img src={code} alt="icone de código" />
            {codigo}
          </li>
          <li>
            <img src={share} alt="icone de compartilhamento" />
            {compartilhamentos}
          </li>
          <li>
            <img src={chat} alt="icone de comentários" />
            {comentarios}
          </li>
        </ul>
        <div className="rodape__usuario">
          <img src={usuario.imagem} alt="icone de perfil" />
          {usuario.nome}
        </div>
      </div>
    </article>
  );
}
