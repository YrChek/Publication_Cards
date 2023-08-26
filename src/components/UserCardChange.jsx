import { useContext, useState } from "react";
import ChangeContext from "./context/ChangeContext";
import putFetch from "./fetch/putFetch";

/**
 * @description Компонент отображает страницу редактирования отдельного поста пользователя
 * @requestor UserCard.jsx
 * @operations получение данных, введенных пользователем в текстовую форму
 * @operations выполняет PUT запрос, для изменения контента выбранного поста пользователя
 * @param user useContext. Полученные данные GET запроса по id поста
 * @param setUser useContext. Функция(?) изменения полученных данных GET запроса по id поста
 * @param setCardStatus useContext. Функция(???) изменения статуса выбора отображения компонентов
 * @param text данные, введенные пользователем в текстовую форму
 * @returns HTML
 */
export default function UserCardChange() {

  const { setCardStatus, user, setUser } = useContext(ChangeContext);
  const [text, setText] = useState(user.content);

  if (!user) {
    setCardStatus('error');
    return
  }

  const handChanel = () => {
    setCardStatus('title')
  }

  const handlerChange = (e) => {
    const words = e.target.value
    setText(words)
  }

  const handlerSave = async () => {
    const fetch = await putFetch(user.id, text)
    if (fetch) {
      setUser({...user, content: text, created: Date.now()})
      setCardStatus('title')
    } else {
      setCardStatus('error')
    }
  }

  return (
    <div className="change_card">
      <div className='change_card-title'>
        <span className='change_card-title-text'>Редактировать публикацию</span>
        <span className='change_card-title-canel' onClick={handChanel}>&#10006;</span>
      </div>
      <hr />
      <div className='user-data-change_card'>
        <div className='user-photo-change_card'>
          <img className='user-image-max' src="https://avatarko.ru/img/kartinka/14/muzhchina_kapyushon_13890.jpg" alt="" />
        </div>
        <div className='user-content-change'>
          <input type="text" 
            className="change_card-form-content" 
            value = {text}
            onChange={handlerChange}
          />
        </div>
        <div className="smile-change_card">&#128578;</div>
      </div>
      <hr />
      <div className="change_card-select_panel">
        <div className="change_card-item_select">
          <span className="smile-item_select">&#128248;</span>
          <span className="text-item_select">Фото/видео</span>
        </div>
        <div className="change_card-item_select">
          <span className="smile-item_select">&#128578;</span>
          <span className="text-item_select">Чувства/действия</span>
        </div>
        <div className="change_card-item_select">
          <span className="smile-item_select">&#127902;</span>
          <span className="text-item_select">GIF</span>
        </div>
        <div className="change_card-item_select">
          <span className="smile-item_select">&#127941;</span>
          <span className="text-item_select">Отметить друзей</span>
        </div>
        <div className="change_card-item_select">
          <span className="smile-item_select">&#10071;</span>
          <span className="text-item_select">Отметить посещение</span>
        </div>
      </div>
      <div className="change_card-form">
        <button type="button" className="btn-change_card" onClick={handlerSave}>Сохранить</button>
      </div>
    </div>
  )
}
