import { useNavigate } from 'react-router';
import UserData from './UserData';
import UserRaction from './UserReaction';
import CommentForm from './CommentFofm';
import './css/cardItem.css'

/**
 * @description Отображает отдельный пост на главной странице.
 * @requestor Catalog.jsx
 * @param data объект с данными автора поста и контентом.
 * @operations При клике делает переход на URL с карточкой просмотра
 * @returns UserData && UserReaction && CommentForm
 */
export default function CardItem({ data }) {

  const navigate = useNavigate()

  const handle = () => {
    navigate(`/post/${data.id}`)
  }

  return (
    <div className='card-item'>
      <div className='card-item-user' onClick={handle}>
        <UserData data={data} />
        <hr />
      </div>
      <UserRaction />
      <hr />
      <CommentForm />
    </div>
  )
}
