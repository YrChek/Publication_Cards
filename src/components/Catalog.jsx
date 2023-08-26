import { useEffect, useState } from "react";
import CardItem from "./CardItem";
import CreationPanel from "./CreationPanel";
import getFetch from "./fetch/getFetch";
import ErrorPage from "./ErrorPage";

/**
 * @description Компонент отображения всех постов пользователей
 * @requestor Переход на URL главной страницы
 * @operations Делает GET запрос на сервер и получает список объектов (карточек с постами пользователей)
 * @returns ErrorPage | CreationPanel && CardItem
 */
export default function Catalog() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState(false)

  useEffect(() => {
    const usersPosts = async () => {
      const { data, error } = await getFetch('posts');
      if (!error) setPost(data);
      if (error) {
        setPost([]);
        setError(error)
      }
    }
    usersPosts()
    }, [])

  return (
    <>
      { error ? <ErrorPage error={error}/> : <CreationPanel /> }
      <div className="catalog">
        {post.map(user => <CardItem key={user.id} data={user} />)}
      </div>
    </>
  )
}
