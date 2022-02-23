
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

import Input from './components/input/Input'
import data from "./data.json"
import useStyles from './Home.style';
import VerticalList from './components/verticalList/VerticalList'

function Home() {
    const [start, setStart] = useState(0)
    const [searchParams, setSearchParams] = useSearchParams();
    const classes = useStyles();
    const [value, setValue] = useState(searchParams.get("q"));
    const onChange = (event) => {
        setValue(event.target.value);
        setSearchParams(event.target.value ? { q: event.target.value } : {});
        event.target.value ? setStart(1) : setStart(0)
    }
    const movies = start == 0 ? data.movies : data.movies.filter((movie) =>
        movie.title.match(new RegExp(value, "i"))
    );
    return (
        <div>
            <Input value={value} onChange={onChange} />
            <VerticalList className={classes.list} data={movies} />
        </div>
    )
}

export default Home