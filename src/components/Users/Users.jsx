import React from "react"
import s from "./Users.module.css"

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: "https://xrest.ru/schemes/00/0d/8b/30/%D0%A3%D1%82%D1%8F-1.jpg",
                    followed: false,
                    fullName: "Utya",
                    status: "I`m nice",
                    location: {city: "Kharkiv", country: "Ukraine"}
                },
                {
                    id: 2,
                    photoUrl: "https://pbs.twimg.com/profile_images/1127613794941845504/9zbEcO5y_400x400.jpg",
                    followed: true,
                    fullName: "Kotya",
                    status: "I`m cool",
                    location: {city: "Kharkiv", country: "Ukraine"}
                },
                {
                    id: 3,
                    photoUrl: "https://pbs.twimg.com/profile_images/669804065879154688/ittaukWo.jpg",
                    followed: false,
                    fullName: "Krolya",
                    status: "I`m wonderful",
                    location: {city: "Kharkiv", country: "Ukraine"}
                }
            ]
        )
    }

    return (
        <div>
        {
                props.users.map ( u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={s.userPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={ () => { props.unfollow(u.id) } }> Unfollow </button>
                                : <button onClick={ () => { props.follow(u.id) } }> Follow </button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users