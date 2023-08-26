import './css/userReaction.css';

/**
 * @description Компонент отображения на странице секции с иконками "Нравится" и "Комментировать"
 * @requestor CardItem.jsx | UserCardTitle.jsx
 * @returns HTML
 */
export default function UserRaction() {

  return (
    <div className="reaction">
      <div className='like'>
        <div className='icon-like'></div>
        <span className='icon-like-text'>Нравится</span>
      </div>
      <div className='comment'>
        <div className='icon-comment'></div>
        <span className='icon-comment-text'>Комментировать</span>
      </div>
    </div>
  )
}
