import styles from "@/styles/Company.module.css";
import Image from "next/image";

const coverImage = {
  src: require('@/public/images/companyCover.jpg'),
  alt: 'coverImage'
}

const Company = () => {
  return (
    <>
      <div className={`${styles.introduce}`}>
        <div>
          <div className={`${styles.coverImage}`}>
            <Image src={coverImage.src} alt={coverImage.alt} />
          </div>
        </div>
        <hr />
        <div>
          <div className={`${styles.introduceText}`}>
            <h1>대양 아이엔지란?</h1>
            <div>
              <p>국내 최고의 패션 리더 그룹사들의 파트너로서</p>
              <p>20여 년간 끊임없는 신뢰와 열정으로 함께 걸어가고 있습니다.</p>
              <br />
              <p>최상의 품질, 빠른 생산 납기 시스템으로</p>
              <p>국내 20여 브랜드에 납품하고 있으며,</p>
              <br />
              <p>희망과 꿈을 이루어가는 고객사들의</p>
              <p>최고의 파트너가 되도록 더욱 노력하겠습니다.</p>
              <br />
              <p>패션의 완성을 위한 최고의 선택!</p>
              <p>Zipper 전문 회사 대양ING와 함께 경험해보세요.</p>
              <br />
              <p>주식회사 대양아이엔지ⓒ</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.merit}`}>
        <div className={`${styles.inspiringText}`}>
          <hr />
          <div>
            <h1>장점을 소개하는 문구</h1>
          </div>
          <hr />
        </div>
        <div className={`${styles.advantages}`}>
          <div>
            <div className={`${styles.advantageTitle}`}>
              <h1>장점</h1>
              <hr />
            </div>
          </div>
          <div>
            <div className={`${styles.advantageTitle}`}>
              <h1>장점</h1>
              <hr />
            </div>
          </div>
          <div>
            <div className={`${styles.advantageTitle}`}>
              <h1>장점</h1>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Company;