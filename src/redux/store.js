import buba from "./../img/buba.jpg";
import busya from "./../img/busya.jpg";
import freud from "./../img/freud.jpg";
import mum from "./../img/mum.jpg";
import dad from "./../img/dad.jpg";
import dashka from "./../img/dashka.jpg";
import ava from "./../img/ava.jpg";
import s from "./../components/Dialogs/Dialogs.module.css";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 10},
                {id: 2, message: "It's my first post", likesCount: 15}
            ],
            newPostText: ""
        },
        dialogsPage: {
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
            newMessageText: ""
        },
        sidebar: {
            friends: [
                {id: 1, name: "Bubochka", src: buba},
                {id: 2, name: "Businka", src: busya},
                {id: 3, name: "Freud", src: freud}
            ]
        }
    },
    _subscriber() {
        console.log("no subscribers")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._subscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._subscriber(this._state)

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._subscriber(this._state)

        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 7,
                message: this._state.dialogsPage.newMessageText,
                className: s.me,
                src: ava
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ""
            this._subscriber(this._state)

        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._subscriber(this._state)
        }
    }
}


export const addPostActionCreator = () => ({
    type: ADD_POST
})


export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
})


export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
})

export default store;