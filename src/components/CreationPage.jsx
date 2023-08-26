import CreationPageHeader from './CreationPageHeader';
import PublicationCreationForm from './PublicationCreationForm';
import './css/creationPage.css'

/**
 * @description Компонент отображения страницы создания поста
 * @requestor Переход по URL адресу
 * @returns reationPageHeader.jsx && PublicationCreationForm.jsx
 */
export default function CreationPage() {

  return (
    <div className="creation_page">
      <CreationPageHeader />
      <PublicationCreationForm />
    </div>
  )
}
