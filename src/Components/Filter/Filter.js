import React, {useState} from "react";
import'./Filter.modules.css';

const Filter = ({filteration}) => {
    const [filter,setFilter] = useState("");

    const filterHandler = (e) => {
        setFilter(e.target.value)
        filteration(e.target.value)
    }
    return (
        <div className={'mb'}>
            <input type='text' placeholder='Enter Here...' value={filter} onChange={filterHandler}/>
        </div>
    )
}

export default Filter;