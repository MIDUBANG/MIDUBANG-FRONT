const api = () => {
  return <p>dd</p>;
};

export default api;

// import React from "react";
// import axios from "axios";

// const useMessage = () => {
//   const error = (msg: string, { onClose }: { onClose: () => void }) => {
//     console.log(msg);
//     onClose();
//   };
//   return { error };
// };

// type ErroProp = { [code: number]: { msg: string; onClose: () => void } };

// const useApi = (url: string, body: any, codes: ErroProp) => {
//   const message = useMessage();

//   const sendPost = React.useCallback(async () => {
//     try {
//       await axios.post(url, body);
//     } catch (err) {
//       if (codes[err.response.status]) {
//         const { msg, onClose } = codes[err.response.status];
//         message.error(msg, { onClose });
//       } else {
//         console.log("없는 에러임");
//       }
//     }
//   }, [url, body, message, codes]);

//   return { sendPost };
// };

// export default function App() {
//   const { sendPost } = useApi(
//     "어쩌구",
//     { userId: 1 },
//     {
//       401: {
//         msg: "현재 같은 아이디로 다른 곳에서 접속 중 입니다.",
//         onClose: () => console.log("아하"),
//       },
//       402: {
//         msg: "상대방을 차단 했거나 차단되어 채팅방을 생성할 수 없습니다",
//         onClose: () => console.log("우후"),
//       },
//     }
//   );
//   return (
//     <div className="App">
//       {" "}
//       <button onClick={sendPost}>전송</button>{" "}
//     </div>
//   );
// }
