import { Link } from "react-router-dom";
import styles from "./Header.module.css";

//Por mais que esse seja o componente de header da sua página ele não fica no header do html na estrutura do react já que tudo é exibido dentro da div root
//Por isso ele não precisa ser um header de fato, pode ser uma div comum.
const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <span>ToDO List</span>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export { Header };
