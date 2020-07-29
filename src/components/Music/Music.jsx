import React from "react";
import ReactPlayer from "react-player";
/*import antitila from "./../../music/antitila.mp3";*/

const Music = () => {
    return (
        <div>
            Антитіла
            <div>
                <ReactPlayer url='https://www.youtube.com/watch?v=2BNoM8eveTU' controls={true}/>
            </div>

        </div>
    )
}

export default Music;