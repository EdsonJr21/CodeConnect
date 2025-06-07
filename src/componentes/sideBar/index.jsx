import logo from "./assets/Logo.svg";
import feed from "./assets/feed.svg";
import perfil from "./assets/perfil.svg";
import info from "./assets/info.svg";
import "./styles.css";

export default function SideBar() {
  return (
    <aside>
      <img src={logo} alt="Logo do projeto" />
      <nav>
        <ul className="lista-sidebar">
          <li>
            <a href="#" className="item__link-publicar">
              Publicar
            </a>
          </li>
          <li>
            <a href="#" className="item__link item__link--ativo">
              <img src={feed} alt="" />
              <span>Feed</span>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={perfil} alt="" />
              <span>Perfil</span>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={info} alt="" />
              <span>Sobre nós</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
