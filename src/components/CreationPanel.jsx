import { useNavigate } from 'react-router';
import './css/creationPanel.css';

/**
 * @description Компонент отображения на странице секции "Создать блок"
 * @requestor Catalog.jsx
 * @operations При нажатии на кнопку "Создать пост" происходит переход на URL создания поста
 * @returns HTML
 */
export default function CreationPanel() {

  const navigate = useNavigate();

  const handlerClick = () => {
    navigate('/post/new')
  }

  return (
    <div className="create">
      <button type='button' className='btn-create' onClick={handlerClick}>Создать пост</button>
    </div>
  )
}