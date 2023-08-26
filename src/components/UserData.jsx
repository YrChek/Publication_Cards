import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import relativeTime from 'dayjs/plugin/relativeTime';
import './css/userData.css';
import { useNavigate } from 'react-router';

dayjs.locale('ru');
dayjs.extend(relativeTime);

/**
 * @description Компонент отображения на странице данных автора поста, периода создания поста, текст поста
 * @requestor CardItem.jsx | UserCadrTitle.jsx
 * @param data объект с данными автора поста и контентом.
 * @operations Преобразует время создания поста в прошедщее время
 * @operations  При клике на значок, делает переход на главную страницу
 * @returns HTML
 */
export default function UserData({ data }) {
  
  const navigate = useNavigate();

  const timeTo = dayjs(Number(data?.created)).fromNow(true)

  const handlerCanel = () => {
    navigate('/')
  }

  return (
    <>
      <div className='user-data'>
        <div className='user-photo'>
          <img className='user-image-max' src="https://avatarko.ru/img/kartinka/14/muzhchina_kapyushon_13890.jpg" alt="" />
        </div>
        <div className='user-text'>
          <h3 className='user-title'>{data?.name}</h3>
          <span className='user-text'>Основатель группы</span>
          <span>&bull;</span>
          <span className='uset-date'>{timeTo}</span>
        </div>
        <div className='user-data-canel' onClick={handlerCanel}>&rsaquo;</div> {/*повесил на этот знак возврат в основное меню, в ТЗ этот момент отсутствует */}
      </div>
      <div className='user-content'>
        {data?.content}
      </div>
    </>
  )
}
