import React from "react"
import s from "./Users.module.css"
import * as axios from "axios";

let Users = (props) => {

    axios.get("https://social-network.samuraijs.com/api/1.0/users?count=10&page=2").then(response => {
        props.setUsers(response.data.items)
    })

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={ u.photos.small != null ? u.photos.small : "https://elementy.ru/images/news/krill_penguin_fig1_550.jpg"} className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}> Unfollow </button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}> Follow </button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users