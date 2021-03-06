import useStyles from "./Card.style";

function Card({ poster_path, title }) {
  const imageURL = `https://image.tmdb.org/t/p/w92${poster_path}`;
  const classes = useStyles({ imageURL });
    return (
    <div className={classes.root}>
        <h2 className={classes.title}>{title}</h2>
    </div>
    )
}

export default Card