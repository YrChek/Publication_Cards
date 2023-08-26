/**
 * 
 * @description Компонент отображения на странице предупреждения об ошибке
 * @requestor Catalog.jsx
 * @returns HTML
 */
export default function ErrorPage({ error }) {

  return (
    <div className="error_page">
      <h3>Ошибка связи с сервером</h3>
      <span>Ошибка: &laquo; { error } &raquo;</span>
    </div>
  )
}
