import DeleteAndChangePanel from "./DeleteAndChangePanel";
import UserData from "./UserData";
import UserRaction from "./UserReaction";

/**
 * @description Компонент отображаения карточки просмотра поста
 * @requestor UserCard.jsx
 * @param data полученные данные GET запроса
 * @returns UserData.jsx && UserReacrion.jsx && DeleteAhdChangePanel.jsx
 */
export default function UserCardTitle({ data }) {

  return (
    <div className="userCardTitle">
      <div className="card-item-user">
        <UserData data={data} />
        <hr />
        <UserRaction />
      </div>
      <hr />
      <DeleteAndChangePanel />
  </div>
  )
}
