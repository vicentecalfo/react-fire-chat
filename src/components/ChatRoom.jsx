import ChatMessage from './ChatMessage';
import './ChatRoom.css';
// import {useRef, useState} from 'react'
// import {
// 	addDoc,
// 	collection,
// 	limit,
// 	orderBy,
// 	query,
// 	serverTimestamp,
// } from 'firebase/firestore'
// import {useCollectionData} from 'react-firebase-hooks/firestore'
// import ChatMessage from './ChatMessage'

function ChatRoom() {
	// const forceBottomScrollElement = useRef<HTMLSpanElement>(null)
	// const messagesRef = collection(firestore, 'messages')
	// const dbQuery = query(messagesRef, orderBy('createdAt'), limit(25))

	// const collectionDataOption = {idField: 'id'}
	// const [messages] = useCollectionData(
	// 	dbQuery,
	// 	collectionDataOption
	// )

	// const [formValue, setFormValue] = useState('')

	// const sendMessage = async (e) => {
	// 	e.preventDefault()

	// 	const {uid, photoURL, displayName} = auth.currentUser

	// 	const docRef = await addDoc(messagesRef, {
	// 		text: formValue,
	// 		createdAt: serverTimestamp(),
	// 		uid,
	// 		photoURL,
	// 		displayName,
	// 	})

	// 	setFormValue('')
	// 	forceBottomScrollElement?.current?.scrollIntoView({behavior: 'smooth'})
	// }

	return (
		<>
			<div className='chat-room'>
				<main>
                    <ChatMessage />
					{/* {messages &&
						messages.map((msg, index) => (
							<ChatMessage key={index} message={msg} auth={auth}/>
						))}

					<span ref={forceBottomScrollElement}></span> */}
				</main>
				<div className='form'>
					<form>
						<input
							placeholder='Vamos conversar'
							type='text'
						/>

						<button type='submit'>
							<img src='./sent.png' alt="Botão de enviar"/>
						</button>
					</form>
				</div>
			</div>
		</>
	)
}

export default ChatRoom