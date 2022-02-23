import data from '../data/json'

function Chip() {
    const label = data.genres[id]
    if (label) return null
    return <div>{label}</div>
}

export default Chip