import React from "react";
import antitila from "./../../music/antitila.mp3";
import s from "./Music.module.css";

const Music = () => {
    return (
        <div>
            Антитіла
            <div>
                <audio controls="controls">
                    <source src={antitila} type="audio/mp3" />
                </audio>
            </div>

        </div>
    )
}

export default Music;