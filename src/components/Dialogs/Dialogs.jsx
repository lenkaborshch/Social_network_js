import React from "react";
import s from "./Dialogs.module.css";
import {BrowserRouter} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs
        .map ( d => <DialogItem name={d.name} id={d.id} src={d.src} /> );


    let messagesElements = state.messages
        .map ( m => <Message message={m.message} className={m.className} src={m.src} />);

    let onSendMessageClick = () => {
        props.store.dispatch( sendMessageCreator() );
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch( updateNewMessageBodyCreator(body) );
    }

    return (
        <BrowserRouter>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    { dialogsElements }
                </div>
                <div className={s.messages}>
                    <div className={s.textMessages}> { messagesElements } </div>
                    <div className={s.sendMessage}>
                        <div>
                            <textarea onChange={onNewMessageChange}
                                       value={state.newMessageBody}
                                       placeholder="Your message..."/>
                        </div>
                        <div>
                            <button onClick={onSendMessageClick}>Жмакни меня</button>
                        </div>
                    </div>
                </div>

            </div>
        </BrowserRouter>
    )
}

export default Dialogs;