import React, { Component } from 'react';
import './Posts.css';

class Posts extends Component {
    render() {
        return (
            <div>
                <p>Posts List Component!!</p>
            </div>
        )
    }
}

export default Posts;

// import React from "react";
// import GameCard from "../components/Games/GameCard";

// import useGames from "../hooks/useGames";

// function GameShow(props) {
//     const [game] = useGames(props.match.params.id);
//     return game ? <GameCard game={game} /> : <h3>Loading...</h3>;
// }

// export default GameShow;
