import React from "react";
import s from "./Dialogs.module.css";
import {BrowserRouter, Redirect} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map ( d => <DialogItem name={d.name} id={d.id} src={d.src} key={d.id} /> );


    let messagesElements = props.dialogsPage.messages
        .map ( m => <Message message={m.message} className={m.className} src={m.src} key={m.id} />);

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }

    if (!props.isAuth) return <Redirect to="./login" />

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
                                       value={props.dialogsPage.newMessageBody}
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