import buba from "./../img/buba.jpg";
import busya from "./../img/busya.jpg";
import freud from "./../img/freud.jpg";
import mum from "./../img/mum.jpg";
import dad from "./../img/dad.jpg";
import dashka from "./../img/dashka.jpg";
import ava from "./../img/ava.jpg";
import s from "./../components/Dialogs/Dialogs.module.css";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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
            newMessageBody: ""
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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._subscriber(this._state)
    }
}

export default store;