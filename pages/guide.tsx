import styles from "@/styles/Guide.module.css";
import { useEffect, useRef } from "react";

const Guide = () => {
  const mapId = useRef<Element | any>(null);

  useEffect(() => {
    const location: { latitude: number, longtitude: number } = {
      latitude: 37.57360,
      longtitude: 127.00450
    }

    mapId.current = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(location.latitude - 0.001, location.longtitude),
      zoom: 16
    });

    new naver.maps.Marker({
      position: new naver.maps.LatLng(location.latitude, location.longtitude),
      map: mapId.current
    });
  }, []);

  return (
    <>
      <div className={`${styles.guide}`}>
        <div className={`${styles.map}`}>
          <div className={`${styles.naver}`} id="map" />
          <div className={`${styles.cover}`} />
        </div>
        <div className={`${styles.inform}`}>
          <div>
            <p>서울특별시 종로구 김상옥로 59,</p>
            <p>한아빌딩 3층</p>
          </div>
          <hr />
          <div>
            <p>동대문역 기준 ~위치</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Guide;