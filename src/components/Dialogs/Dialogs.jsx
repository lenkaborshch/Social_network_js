import React from "react";
import s from "./Dialogs.module.css";
import {BrowserRouter} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/store";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs
        .map ( d => <DialogItem name={d.name} id={d.id} src={d.src} /> );


    let messagesElements = props.dialogsPage.messages
        .map ( m => <Message message={m.message} className={m.className} src={m.src} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch( addMessageActionCreator() );
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch( updateNewMessageTextActionCreator(text) );
    }

    return (
        <BrowserRouter>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    { dialogsElements }
                </div>
                <div className={s.messages}>
                    <div className={s.textMessages}>
                        { messagesElements }
                    </div>
                    <div className={s.sendMessage}>
                        <textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessageText} placeholder="Your message..." />
                        <button onClick={addMessage}>Жмакни меня</button>
                    </div>
                </div>

            </div>
        </BrowserRouter>
    )
}

export default Dialogs;