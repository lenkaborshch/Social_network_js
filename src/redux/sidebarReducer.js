import buba from "../img/buba.jpg";
import busya from "../img/busya.jpg";
import freud from "../img/freud.jpg";

let initialState = {
    friends: [
        {id: 1, name: "Bubochka", src: buba},
        {id: 2, name: "Businka", src: busya},
        {id: 3, name: "Freud", src: freud}
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state
}

export default sidebarReducer