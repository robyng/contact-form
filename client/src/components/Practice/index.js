import React, {useState} from 'react';


function Practice() {
    const list = ['cog', 'cat', 'cow', 'turkey', 'snake']
    const [search, setSearch] = useState(''); // returns array of 2, order matters, name doesn't matter. 1st is state, 2nd update state
    console.log(search)
    return(
        <section>
           <input value={search} onChange={(e)=> setSearch(e.target.value)}></input>
           {list.filter(item => item.includes(search)).map (item => (
               <h3>{item}</h3>
            ))}
        </section>
    )
}

export default Practice;