import { Footer, Header } from "@/components";
import styles from "@/styles/Product.module.css";

const List = ({ title }: { title: string }) => {
  return (
    <>
    <div className={`${styles.title}`}>
      <p>{ title }</p>
    </div>
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
    </>
  );
}

const Product = () => {
  return (
    <>
      <div className={`${styles.products}`}>
        <div>
          <List title="지퍼" />
        </div>
        <div>
          <List title="풀러" />
        </div>
      </div>
    </>
  );
}

export default Product;