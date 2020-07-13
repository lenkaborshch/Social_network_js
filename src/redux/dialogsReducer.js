import s from "../components/Dialogs/Dialogs.module.css";
import ava from "../img/ava.jpg";
import buba from "../img/buba.jpg";
import busya from "../img/busya.jpg";
import freud from "../img/freud.jpg";
import mum from "../img/mum.jpg";
import dad from "../img/dad.jpg";
import dashka from "../img/dashka.jpg";

const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

let initialState = {
    dialogs: [
        {id: 1, name: "Bubochka", src: buba},
        {id: 2, name: "Businka", src: busya},
        {id: 3, name: "Freud", src: freud},
        {id: 4, name: "Mum", src: mum},
        {id: 5, name: "Dad", src: dad},
        {id: 6, name: "Dashka", src: dashka}
    ],
    messages: [
        {id: 1, message: "Hi", className: s.me, src: ava},
        {id: 2, message: "Hru?", className: s.friend, src: buba},
        {id: 3, message: "You are welcome", className: s.me, src: ava},
        {id: 4, message: "Yo", className: s.friend, src: buba},
        {id: 5, message: "Hey", className: s.me, src: ava},
        {id: 6, message: "Wow", className: s.friend, src: buba}
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = {
                id: 7,
                message: state.newMessageBody,
                className: s.me,
                src: ava
            }
            state.messages.push(body)
            state.newMessageBody = ""
            return state
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default dialogsReducer