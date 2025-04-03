import styles from "@/styles/Request.module.css";
import { File } from "buffer";
import { ChangeEvent, useEffect, useState } from "react";

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
  const [goOverSubmitText, setGoOverSubmitText] = useState<string>('정말 제출하시겠습니까?');
  const [showGoOverSubmitText, setShowGoOverSubmitText] = useState<boolean>(false);

  const [name, setName] = useState<orderDetailsAttribute['name']>('');
  const [contact, setContact] = useState<orderDetailsAttribute['contact']>('');
  const [title, setTitle] = useState<orderDetailsAttribute['title']>('');
  const [content, setContent] = useState<orderDetailsAttribute['content']>('');

  const [types, setTypes] = useState<orderDetailsAttribute['types']>([]);
  const [files, setFiles] = useState<Array<File>>([]);

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

  const activeGoOverSubmit = () => {
    if (showGoOverSubmitText) {
      submit();
    }
    else {
      setShowGoOverSubmitText(true);
    }
  }

  const submit = async () => {
    let base64Files: Array<fileType> = [];

    const fileToBase64Promise = files.map((file) => {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();

        reader.readAsDataURL(file as Blob);
        reader.onload = () => {
          const base64 = reader.result;

          if (base64) {
            base64Files.push({
              name: file.name,
              path: base64.toString()
            });

            resolve(true);
          }
        }
      });
    });

    await Promise.all(fileToBase64Promise);

    const resetSubmit = () => {
      setTimeout(() => {
        setShowGoOverSubmitText(false);
        setActiveSubmitButton(true);
        setTimeout(() => setGoOverSubmitText('정말 제출하시겠습니까?'), 150);
      }, 2500);
    }

    try {
      const orderDetails: orderDetailsAttribute = {
        name: name,
        contact: contact,
        types: types,
        title: title,
        content: content,
        files: base64Files
      };

      const server = 'https://daeyang-ing-back.vercel.app';

      setGoOverSubmitText('제출 중입니다.');
      setActiveSubmitButton(false);

      const postOrderRes = await fetch(`${server}/postOrder`, {
        method: 'post',
        body: JSON.stringify(orderDetails),
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' }
      });

      if (postOrderRes.ok) {
        try {
          await postOrderRes.json().then(data => {
            if (data.status === 200) {
              setGoOverSubmitText('문의가 등록되었습니다.');
              resetSubmit();
            }
            else {
              setGoOverSubmitText('문제가 발생했습니다.');
              resetSubmit();
            }
          });
        } catch (Exception) {
          setGoOverSubmitText('문제가 발생했습니다.');
          resetSubmit();
        }
      }
    } catch (Exception) {
      setGoOverSubmitText('문제가 발생했습니다.');
      resetSubmit();
    }
  }

  useEffect(() => {
    const orderDetails: { name: orderDetailsAttribute['name'], contact: orderDetailsAttribute['contact'], title: orderDetailsAttribute['title'] } = {
      name: name.replace(/ /g, ''),
      contact: contact.replace(/ /g, ''),
      title: title
    }

    if (orderDetails.name.length !== 0 && orderDetails.contact.length !== 0 && orderDetails.title.length !== 0) setActiveSubmitButton(true);
    else setActiveSubmitButton(false);
  }, [name, contact, title, content, types]);

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
          <p className={`${styles.goOverSubmitText} ${showGoOverSubmitText ? styles.showGoOverSubmitText : styles.hideGoOverSubmitText}`}>{goOverSubmitText}</p>
          <input className={`${styles.submitButton}`} type="button" value={'제출'} disabled={!activeSubmitButton} onClick={() => activeGoOverSubmit()} />
        </div>
      </div>
    </>
  );
}

export default Request;