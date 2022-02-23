import classNames from "classnames";
import { Link } from "react-router-dom"

import Card from "../card/Card";
import useStyles from "./VerticalList.style";

function VerticalList({data, className}) {
    const classes = useStyles();
    return (
        <ul className={classNames([classes.root, className])}>
            {data.map((entry) => (
                <li key={entry.id} className={classes.item}>
                    <Link to={`/movies/${entry.id}`} className={classes.link}>
                        <Card {...entry} />
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default VerticalList