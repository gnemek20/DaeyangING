import { Header } from "@/components";
import styles from "@/styles/Product.module.css";

const List = () => {
  return (
    <table className={`${styles.list}`}>
      <tbody>
        <tr>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}

const Product = () => {
  return (
    <>
      <Header />
      <div className={`${styles.products}`}>
        <div>
          <List />
        </div>
        <div>
          <List />
        </div>
      </div>
    </>
  );
}

export default Product;