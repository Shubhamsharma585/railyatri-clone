import React from 'react'
import Styles from "./Searchbar.module.css"



function Searchbar() {

    
    return (
        <div className={Styles.main}>
            <input type="text" name="" id="" placeholder="Source City"/>
            <input type="text" name="" id="" placeholder="Destination City"/>
            <input type="date" name="" id="" placeholder="23 Jul, 2021"/>
            <div className={Styles.search}><p>Search</p></div>
        </div>
    ) 
}

export default Searchbar;
