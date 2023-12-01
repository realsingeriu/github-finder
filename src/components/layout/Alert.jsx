import React, { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
  // AlertContext에서 상태를 가져옵니다.
  const { alert } = useContext(AlertContext);

  return (
    // 상태가 null이 아닌 경우에만 메세지를 화면에 표시합니다.
    alert !== null && (
      <p className="flex items-start mb-2 space-x-2">
        <span>😁</span>
        <span className="flex-1 text-base font-semibold leading-7">
          <strong>{alert.msg}</strong>
        </span>
      </p>
    )
  );
}

export default Alert;
