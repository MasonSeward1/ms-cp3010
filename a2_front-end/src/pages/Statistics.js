import { Link } from "react-router-dom";
import { ListGroup } from 'react-bootstrap';


const ViewGameStats = (props) => {
    let statistics = props.stats;

    if (statistics == null)
        return ( 
            <>
                <h1>Loading Statistic Data...</h1>,
                <p>If the data does not appear in a moment, please refresh the page.</p>
            </>
        )
    
    console.log(statistics.winStreak);

    return (
        <>
            <Link to="/ViewStatistics"></Link>
            <ul id="movie_display">
            {
                statistics.map(stat => 
                    [
                    <ListGroup id="movie_display">
                        <ListGroup.Item >Guesses left: {stat.guessesLeft}</ListGroup.Item>
                        <ListGroup.Item>Times Played: {stat.timesPlayed}</ListGroup.Item>
                        {/* <ListGroup.Item>Average Score: {stats.avgScore}</ListGroup.Item> */}
                        <ListGroup.Item>Number of 10-win-streaks: {stat.winStreak}</ListGroup.Item>
                    </ListGroup>
                    ])
            }
            </ul>
        </>
    )
}

export default ViewGameStats;