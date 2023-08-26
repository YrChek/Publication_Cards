import { useState } from "react";
import postFetch from "./fetch/postFetch";
import { useNavigate } from "react-router";

/**
 * @description Компонент отображения формы ввода и секции "Опубликовать"
 * @requestor CreationPage.jsx
 * @operations Получение введенных пользователем данных в форму ввода
 * @operations Отправка POST запроса с данными для публикации поста
 * @operations Возврат на главную страницу при удачном запросе
 * @operations Предепреждающая надпись и возврат на главную страницу при не удачном запросе
 * @param text введенный пользователем текст в форму ввода текста
 * @param color цвет текста в форме ввода
 * @returns HTML
 */
export default function PublicationCreationForm() {

  const [text, setText] = useState('');
  const [color, setColor] =useState({color: 'black'})
  const navigation = useNavigate()

  const handlerChange = (e) => {
    const data = e.target.value
    setText(data)
  }

  const hanndlerPublic = async () => {
    const fetch = await postFetch(text);
    if (fetch) {
      navigation('/')
    } else {
      setColor({color: 'red'})
      setText('Ошибка публикации')
      const timeOut = setTimeout(() =>{
        navigation('/')
        clearTimeout(timeOut)
      }, 1000)
    }
  }

  return (
    <div className="publication_creation">
      <hr />
      <div className="publication_creation_form">
        <div className="publication_creation_form-avatar"></div>
        <div className="publication_creation_form-container-form_input">
          <input type="text"
            className="publication_creation_form-form_input"
            style={color}
            placeholder="Введите текст" 
            value={text}
            onChange={handlerChange}
          />
        </div>
        <div className="publication_creation_form-form_input-smile">&#128578;</div>
      </div>
      <div className="publication_creation_form-container-btn">
        <button type="button" className="publication_creation_form-bth" onClick={hanndlerPublic}>Опубликовать</button>
      </div>
    </div>
  )
}
