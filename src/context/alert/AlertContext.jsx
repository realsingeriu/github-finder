import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  // 경고창 내용을 스테이트로
  const [state, dispatch] = useReducer(AlertReducer, null);

  // 경고창 메세지를 설정하고 3초뒤 제거
  // 경고(alert)를 설정하는 함수
  const setAlert = (msg, type) => {
    // useReducer를 통해 상태를 업데이트하고, SET_ALERT 액션을 디스패치 합니다.
    dispatch({
      type: "SET_ALERT",
      payload: { msg: msg, type: type },
    });
    // 3초 후에 REMOVE_ALERT 액션을 디스패치하여 경고를 제거합니다.
    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
