import { useNavigate } from "react-router"

/**
 * @description Отображение верхней секции страницы создания поста с иконками
 * @requestor CreationPage.jsx
 * @operations При клике на крестик происходит возврат на главную страницу
 * @returns HTML
 */
export default function CreationPageHeader() {

  const navigate = useNavigate()
  const handlerCanel = () => {
    navigate('/')
  }

  return (
      <div className="creation_page-header">
        <div className="creation_page-header-item">
          <div className="creation_page-header-item-icon">&#128395;</div>
          <div className="creation_page-header-item-text">Публикация</div>
        </div>
        <div className="creation_page-header-item">
          <div className="creation_page-header-item-icon">&#128247;</div>
          <div className="creation_page-header-item-text">Фото/Видео</div>
        </div>
        <div className="creation_page-header-item">
          <div className="creation_page-header-item-icon">&#127909;</div>
          <div className="creation_page-header-item-text">Прямой эфир</div>
        </div>
        <div className="creation_page-header-item">
          <div className="creation_page-header-item-icon">&#9193;</div>
          <div className="creation_page-header-item-text">Еще</div>
        </div>
        <span className="creation_page-header-canel" onClick={handlerCanel}>&#10006;</span>
      </div>
  )
}