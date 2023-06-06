import React, { useEffect, useState } from 'react'
import './Home.css'
import Cards from '../../components/cards/Cards'

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchApi()
  }, [])

  const fetchApi = async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    const product = await res.json()
    setCards(product);

  }
  return (
    <>
      <div className="container">
        {
          cards.length === 0 ?
            <div className='loading'></div>
            :
            <>
              {
                cards.map((card, index) => {
                  return (
                    <Cards key={index} card={card} />
                  )
                })
              }
            </>
        }
      </div>
    </>
  )
}

export default Home