import { Link } from "react-router-dom"

/**
 * @description Компонент с отображением предупреждения о несуществующей странице
 * @requestor Переход на любой URL адрес, для которого отсутствует Route
 * @operations При нажатии на ссылку - переход на главную страницу
 * @returns HTML
 */
const Page404 = () => {
  const style = {
    display: 'flex',
    width: '100%',
    height: '100px',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: '18px'
  }
  return (
    < div style={style}>
      <div>Страница не найдена</div> <br />
      <div><Link to="/">Перейти на главную</Link></div>
    </div>
  )
}

export default Page404
