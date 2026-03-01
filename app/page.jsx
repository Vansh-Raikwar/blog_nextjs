import Image from "next/image";
import styles from "./homepage.module.css";
import Featured from "./components/featured/Featured.jsx";
import CategoryList from "./components/categoryList/CategoryList.jsx";
import CardList from "./components/cardList/CardList.jsx";
import Menu from "./components/menu/Menu.jsx";



export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>

  );
}
