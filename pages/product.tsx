import styles from "@/styles/Product.module.css";
import Image from "next/image";

const introduceCover = {
  src: require('@/public/images/productCover.jpg'),
  alt: 'introduceCover'
}

const variousZippers = [
  {
    src: require('@/public/images/zipper1.jpg'),
    alt: 'zipper1'
  },
  {
    src: require('@/public/images/zipper2.jpg'),
    alt: 'zipper2'
  },
  {
    src: require('@/public/images/zipper3.jpg'),
    alt: 'zipper3'
  },
  {
    src: require('@/public/images/zipper4.jpg'),
    alt: 'zipper4'
  },
  {
    src: require('@/public/images/zipper5.jpg'),
    alt: 'zipper5'
  },
  {
    src: require('@/public/images/zipper6.jpg'),
    alt: 'zipper6'
  },
  {
    src: require('@/public/images/zipper7.jpg'),
    alt: 'zipper7'
  }
];

const imaginaryZipper = {
  src: require('@/public/images/imaginaryZipper.jpg'),
  alt: 'imaginaryZipper'
}

const puller1 = {
  src: require('@/public/images/puller1.jpg'),
  alt: 'puller1'
}
const puller2 = {
  src: require('@/public/images/puller2.jpg'),
  alt: 'puller2'
}
const puller3 = {
  src: require('@/public/images/puller3.jpg'),
  alt: 'puller3'
}

const Deck = ({ image}: { image: typeof introduceCover }) => {
  return (
    <div className={`${styles.deck}`}>
      <Image src={image.src} alt={image.alt} />
    </div>
  );
}

const Product = () => {
  return (
    <>
      <div className={`${styles.introduce}`}>
        <Image src={introduceCover.src} alt={introduceCover.alt} />
        <h1>DaeyangING</h1>
        <p>패션에 날개를 달아주는 하나의 방법</p>
      </div>
      <div className={`${styles.zipperVariety}`}>
        <div className={`${styles.inspiringText}`}>
          <h1>다양한 지퍼를 자유롭게,</h1>
        </div>
        <div className={`${styles.variousZippers}`}>
          {
            variousZippers.map((zipper, index) => (
              <Deck image={zipper} key={index} />
            ))
          }
        </div>
      </div>
      <div className={`${styles.zipperShape}`}>
        <div className={`${styles.inspiringText}`}>
          <h1>생각하는 모양 그대로,</h1>
        </div>
        <div className={`${styles.imaginaryZipper}`}>
          <Image src={imaginaryZipper.src} alt={imaginaryZipper.alt} />
        </div>
        <div className={`${styles.detail}`}>
          <div>
            <p>* 지퍼가 맞물렸을 때 원하는 모양이 나오도록 표현이 가능합니다.</p>
          </div>
        </div>
      </div>
      <div className={`${styles.puller}`}>
        <div className={`${styles.inspiringText}`}>
          <h1>하나의 예술처럼.</h1>
        </div>
        <div className={`${styles.artisticPuller}`}>
          <Image src={puller1.src} alt={puller1.alt} />
        </div>
        <div className={`${styles.artisticPuller}`}>
          <Image src={puller2.src} alt={puller2.alt} />
        </div>
        <div className={`${styles.artisticPuller}`}>
          <Image src={puller3.src} alt={puller3.alt} />
        </div>
      </div>
    </>
  );
}

export default Product;