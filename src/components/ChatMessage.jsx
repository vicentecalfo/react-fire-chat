import "./ChatMessage.css";

function ChatMessage(props) {
  // const {text, uid, photoURL, createdAt, displayName} = props.message
  // const auth = props.auth

  // const sentTime = new Date(createdAt?.seconds * 1000).toLocaleTimeString([], {
  // 	hour: '2-digit',
  // 	minute: '2-digit',
  // })

  // const messageClass = uid === auth?.currentUser?.uid ? 'sent' : 'received'

  const messageClass = "received"; //received

  return (
    <>
      <div className={`message ${messageClass}`}>
        <div className="bubble">
          <img
            className="avatar"
            src="https://api.dicebear.com/6.x/bottts/png"
            alt="Avatar"
          />
          {/* {messageClass === 'sent' ? (
						''
					) : (
						<img
							className='avatar'
							src={
								photoURL ||
								'https://api.adorable.io/avatars/23/abott@adorable.png'
							}
						/>
					)} */}
          <div className="display-message">
            <strong>Vicente Calfo</strong>
            <p>Array values are separated by a comma. For example, the URL could look like this if you want to provide the PRNG with several hair styles in addition to the seed. Note that the avatar styles provide different options. In this example, we use the Pixel Art avatar style.</p>
            <small>28/04/2003</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatMessage;
