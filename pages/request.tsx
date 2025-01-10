import styles from "@/styles/Request.module.css";

const Request = () => {
  return (
    <>
      <div className={`${styles.counsel}`}>
        <div className={`${styles.contact}`}>
          <div>
            <h1>잠깐!</h1>
            <p>이런 연락도 가능해요.</p>
          </div>
          <div className={`${styles.methods}`}>
            <button>전화 연결</button>
            <button>카카오톡 연결</button>
          </div>
        </div>
        <div className={`${styles.survey}`}>
          <table>
            <tbody>
              <tr className={`${styles.item}`}>
                <th>성함</th>
                <td>
                  <input type="text" spellCheck={false} />
                </td>
              </tr>
              <tr className={`${styles.item}`}>
                <th>연락처</th>
                <td>
                  <input type="text" spellCheck={false} />
                </td>
              </tr>
              <tr className={`${styles.item}`}>
                <th>제품 종류</th>
                <td>
                  <label className={`${styles.checkbox}`} htmlFor="zipper">
                    <input type="checkbox" id="zipper" />
                    <p className={`${styles.label}`}>지퍼</p>
                  </label>
                  <label className={`${styles.checkbox}`} htmlFor="puller">
                    <input type="checkbox" id="puller" />
                    <p className={`${styles.label}`}>풀러</p>
                  </label>
                </td>
              </tr>
              <tr className={`${styles.item}`}>
                <th>요청 사항</th>
                <td>
                  <textarea rows={5} spellCheck={false} />
                </td>
              </tr>
              <tr className={`${styles.item}`}>
                <th>첨부파일</th>
                <td>
                  <div className={`${styles.file}`}>
                    <input id="file" type="file" />
                    <label htmlFor="file">업로드</label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Request;