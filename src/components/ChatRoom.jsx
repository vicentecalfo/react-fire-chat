import ChatMessage from "./ChatMessage";
import "./ChatRoom.css";
import { useState } from "react";
import {
  addDoc,
  collection,
  limit,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

function ChatRoom({ firestore, auth }) {
  // const forceBottomScrollElement = useRef<HTMLSpanElement>(null)
  const messagesRef = collection(firestore, "messages");
  const dbQuery = query(messagesRef, orderBy("createdAt"), limit(25));
  const collectionDataOption = { idField: "id" };
  const [messages] = useCollectionData(dbQuery, collectionDataOption);

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    console.log(e);
    e.preventDefault();

    const { uid, photoURL, displayName } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
      displayName,
    });

    setFormValue("");
    // 	forceBottomScrollElement?.current?.scrollIntoView({behavior: 'smooth'})
  };

  return (
    <>
      <div className="chat-room">
        <main>
          {messages &&
            messages.map((msg, index) => (
              <ChatMessage key={index} message={msg} auth={auth} />
            ))}
          {/* <span ref={forceBottomScrollElement}></span> */}
        </main>
        <div className="form">
          <form onSubmit={sendMessage}>
            <input
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              placeholder="Vamos conversar"
              type="text"
            />
            <button type="submit" disabled={!formValue}>
              <img src="./sent.png" alt="Botão de enviar" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ChatRoom;
