import React, { useState } from 'react'
import ItemQuotes from './ItemQuotes'
import './App.css'

const App = () => {
    const [items, setItems] = useState([])

    const fetchData = () => {
        return fetch("https://jsonguide.technologychannel.org/quotes.json")
        .then((response) => response.json())
        .then((data) => {
            setItems(data)
        })
    }
  return (
    <div className="container">
        <button className='btn btn-primary' onClick={() => fetchData()}>Fetch</button>
        {
            items.map((item) => <ItemQuotes text={item.text} author={item.from} />)
        }
    </div>
  )
}

export default App