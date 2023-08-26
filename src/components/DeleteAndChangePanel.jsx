import { useContext } from 'react';
import './css/deleteAndChangePanel.css';
import ChangeContext from './context/ChangeContext';
import deleteFetch from './fetch/deleteFetch';
import { useNavigate } from 'react-router';

/**
 * @description Компонент отображения секции "Изменить" "Удалить"
 * @requestor UserCardTitle.jsx
 * @operations Клик на кнопку "Изменить" приводит к изменению cardStatus, соответсвенно изменению отображения на странице
 * @operations Клик на кнопку "Удалить" приводит к отправке DELETE запроса на удаление поста по его id и переход на главную страницу
 * @param user useContext. Полученные данные GET запроса по id поста
 * @param setCardStatus useContext. Функция(???) изменения статуса выбора отображения компонентов 
 * @returns HTML
 */
export default function DeleteAndChangePanel() {

  const { user, setCardStatus } = useContext(ChangeContext);
  const navigate = useNavigate()

  const handChange = () => {
    setCardStatus('change')
  }
  const handClear = () => {
    if (!user) {
      setCardStatus('error')
    } else {
      const fetch = async () => {
        const status = await deleteFetch(user.id);
        if (status) {
          navigate('/')
        } else {
          setCardStatus('error')
        }
      }
      fetch()
    }
  }

  return (
    <div className="change">
      <button type="button" className="btn-change" onClick={handChange}>Изменить</button>
      <button type="button" className="btn-del" onClick={handClear}>Удалить</button>
    </div>
  )
}
