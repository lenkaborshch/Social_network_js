import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch( sendMessageCreator() );
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch( updateNewMessageBodyCreator(body) );
    }

    return (
        <Dialogs dialogsPage={state}
                 sendMessageClick={onSendMessageClick}
                 updateNewMessageBody={onNewMessageChange} />
    )
}

export default DialogsContainer;