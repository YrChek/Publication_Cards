/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ChanngeContext from './context/ChangeContext'
import UserCardTitle from "./UserCardTitle";
import UserCardChange from "./UserCardChange";
import getFetch from "./fetch/getFetch";
import OperationError from "./OperationError";
import './css/userCard.css';
import { useLocation, useNavigate } from "react-router-dom";
import { pathToRegexp } from "path-to-regexp";

/**
 * @description Стартовый компонент для отображения карточки просмотра поста, либо страницы редактирования поста, либо предупреждения об ошибке
 * @requestor Переход на URL карточки просмотра
 * @operations Делает GET запрос для получения данных по id поста
 * @operations Создает контекст для передачи параметров user, setUser, setCardStatus "нижним" компонентам 
 * @param user useState. Полученные данные по запросу
 * @param cardStatus useState. Ключевое слово для отображения нужного компонента 
 * @returns UserCardTitle | UserCardChane | OperationError
 */
export default function UserCard() {

  const [user, setUser] = useState({});
  const [cardStatus, setCardStatus] = useState('title');
  const navigate = useNavigate()

  const location = useLocation()
  const pathname = location.pathname
  const reg = pathToRegexp('/post/:id?')
  const param = reg.exec(pathname)[1]

  useEffect(() => {
    const user = async () => {
      const { data } = await getFetch('posts', param);
      if (data && data.post) {
        setUser(data.post)
      } else {
        navigate('/404')
      }
    }
    user()
  }, [])

  return (
    <ChanngeContext.Provider value={{setCardStatus, user, setUser}}>
      <>
        {cardStatus === 'title' ? <UserCardTitle data={user} /> : null}
        {cardStatus === 'change' ? <UserCardChange /> : null}
        {cardStatus === 'error' ? <OperationError /> : null}
      </>
    </ChanngeContext.Provider>
  )
}
