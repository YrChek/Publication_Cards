import './css/commentForm.css';

/**
 * @description Компонент отображения на странице секции с формой для комментария и аватарки пользователя
 * @requestor CardItem.jsx
 * @returns HTML
 */
export default function CommentForm() {
  return (
    <div className="comment_form">
      <div className="comment_form-photo">
      <img className='user-image-min' src="https://avatarko.ru/img/kartinka/14/muzhchina_kapyushon_13890.jpg" alt="" />
      </div>
      <div className='input_field'>
        <input type="text" className='comment_form-input' placeholder='Напишите комментарий...'/>
        <div className='inside'>
          <div className='icon'>
            <img className="icon-image" src="smile.png" alt="" />
          </div>
          <div className='icon'>
            <img className="icon-image" src="photo.png" alt="" />
          </div>
          <div className='icon'>
            <img className="icon-image" src="gif.png" alt="" />
          </div>
          <div className='icon'>
            <img className="icon-image" src="document.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
