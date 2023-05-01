import "./ChatMessage.css";

function ChatMessage(props) {
  const { text, uid, photoURL, createdAt, displayName } = props.message;
  const auth = props.auth;

  const sentTime = new Date(createdAt?.seconds * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const messageClass = uid === auth?.currentUser?.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <div className="bubble">
          {messageClass === "sent" ? (
            ""
          ) : (
            <img
              className="avatar"
              alt="Foto de Avatar"
              src={photoURL || "https://api.dicebear.com/6.x/bottts/png"}
            />
          )}
          <div className="display-message">
            {messageClass === "sent" ? "" : <strong>{displayName}</strong>}
            <p>{text}</p>
            <small>{sentTime === "Invalid Date" ? "" : sentTime}</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatMessage;
