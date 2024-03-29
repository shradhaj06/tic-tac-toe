import Icon from "../Icon/Icon";
import '../card/Card.css';
import {memo} from 'react';
function Card({onPlay, player, index, gameEnd}){
    let icon = <Icon/>
    if(player == "X") icon = <Icon name={"cross"}/>
    else if (player == "O") icon = <Icon name = {"circle"}/>
    return(
        <div className="card" onClick={()=> !gameEnd && player=="" && onPlay(index)}>
           {icon}
        </div>
    )
}

export default memo(Card);