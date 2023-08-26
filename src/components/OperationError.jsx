import { useContext } from "react"
import ChangeContext from "./context/ChangeContext"


/**
 * @description Компонент отображения сообщения об ошибке
 * @requestor UseCard.jsx
 * @operations При нажатии кнопки "Назад" возвращается на карточку просмотра
 * @returns HTML
 */
export default function OperationError() {

  const { setCardStatus } = useContext(ChangeContext)
  const handlerChanel = () => {
    setCardStatus('title')
  }

  return (
    <div className="error_page">
      <h3>Операция не выполнена</h3>
      <button type="button" className="btn-canel" onClick={handlerChanel}>Назад</button>
    </div>
  )
}
