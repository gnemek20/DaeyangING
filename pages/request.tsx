import styles from "@/styles/Request.module.css";
import { ChangeEvent, ElementType, use, useEffect, useState } from "react";

const Request = () => {
  type typesType = '지퍼' | '풀러';

  type fileType = {
    name: string
    path: string
  }

  interface orderDetailsAttribute {
    name: string
    contact: string
    types?: Array<typesType>
    title: string
    content?: string
    files?: Array<fileType>
  }

  const [activeSubmitButton, setActiveSubmitButton] = useState<boolean>(false);

  const [name, setName] = useState<orderDetailsAttribute['name']>('');
  const [contact, setContact] = useState<orderDetailsAttribute['contact']>('');
  const [title, setTitle] = useState<orderDetailsAttribute['title']>('');
  const [content, setContent] = useState<orderDetailsAttribute['content']>('');

  const [types, setTypes] = useState<orderDetailsAttribute['types']>([]);
  // const [files, setFiles] = useState<orderDetailsAttribute['files']>([]);
  const [files, setFiles] = useState<Array<fileType>>([]);

  const contentPlaceholder = [
    ``
  ].join('\n');

  const inputText = (target: keyof orderDetailsAttribute, event: ChangeEvent) => {
    const elementTarget = event.target as HTMLInputElement;
    const value = elementTarget.value;
    
    if (target === 'name') setName(value);
    else if (target === 'contact') setContact(value);
    else if (target === 'title') setTitle(value);
    else if (target === 'content') setContent(value);
  }

  const changeOrderTypes = (target: typesType) => {
    let tempList: Array<typesType> = types ? types : [];

    if (types?.includes(target)) tempList = [...tempList.filter(temp => temp !== target)];
    else tempList = [...tempList, target];

    setTypes(tempList);
  }

  const changeFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const eventTarget = event.target;
    const eventFiles = eventTarget.files;

    if (eventFiles !== null) {
      const fileList = Array.prototype.slice.call(eventFiles);
      setFiles([...files, ...fileList]);
      eventTarget.value = '';
    }
  }

  const deleteFile = (fileIndex: number) => {
    setFiles([...files.filter((file, index) => index !== fileIndex)]);
  }

  const submit = () => {
    // TODO: 서버에 문의 보내는 기능 추가
  }

  useEffect(() => {
    const orderDetails: orderDetailsAttribute = {
      name: name.replace(/ /g, ''),
      contact: contact.replace(/ /g, ''),
      types: types,
      title: title,
      content: content,
      files: files
    }

    if (orderDetails.name.length !== 0 && orderDetails.contact.length !== 0 && orderDetails.title.length !== 0) setActiveSubmitButton(true);
    else setActiveSubmitButton(false);
  }, [name, contact, title, content, types, files]);

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
                <th>성함 *</th>
                <td>
                  <input type="text" spellCheck={false} onChange={(event) => inputText('name', event)} />
                </td>
              </tr>
              <tr className={`${styles.item}`}>
                <th>연락처 *</th>
                <td>
                  <input type="text" spellCheck={false} onChange={(event) => inputText('contact', event)} />
                </td>
              </tr>
              <tr className={`${styles.item}`}>
                <th>제품 종류</th>
                <td>
                  <label className={`${styles.checkbox}`} htmlFor="zipper">
                    <input type="checkbox" id="zipper" onChange={() => changeOrderTypes('지퍼')} />
                    <p className={`${styles.label}`}>지퍼</p>
                  </label>
                  <label className={`${styles.checkbox}`} htmlFor="puller">
                    <input type="checkbox" id="puller" onChange={() => changeOrderTypes('풀러')} />
                    <p className={`${styles.label}`}>풀러</p>
                  </label>
                </td>
              </tr>
              <tr className={`${styles.item}`}>
                <th>제목 *</th>
                <td>
                  <input className={`${styles.requestTitle}`} type="text" spellCheck={false} onChange={(event) => inputText('title', event)} />
                </td>
              </tr>
              <tr className={`${styles.item}`}>
                <th>요청 사항</th>
                <td>
                  <textarea rows={5} spellCheck={false} placeholder={contentPlaceholder} onChange={(event) => inputText('content', event)} />
                </td>
              </tr>
              <tr className={`${styles.item}`}>
                <th>첨부파일</th>
                <td>
                  <div className={`${styles.file}`}>
                    <input id="file" type="file" onChange={(event) => changeFiles(event)} multiple />
                    <label htmlFor="file">{ files.length === 0 ? "업로드" : `${files.length}개의 첨부파일` }</label>
                  </div>
                </td>
                {
                  files.length !== 0 && (
                    <td className={`${styles.attachmentList}`}>
                      {
                        files.map((file, index) => (
                          <div className={`${styles.attachment}`} key={index}>
                            <p className={`${styles.attachmentName}`} onClick={() => deleteFile(index)}>{ file.name }</p>
                          </div>
                        ))
                      }
                    </td>
                  )
                }
              </tr>
            </tbody>
          </table>
        </div>
        <div className={`${styles.submitArea}`}>
          <input className={`${styles.submitButton}`} type="button" value={"문의 보내기"} disabled={!activeSubmitButton} />
        </div>
      </div>
    </>
  );
}

export default Request;