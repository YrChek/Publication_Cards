import { createContext } from "react";

const ChangeContext = createContext({setCardStatus: () => console.log('Ошибка контекста')})
export default ChangeContext
