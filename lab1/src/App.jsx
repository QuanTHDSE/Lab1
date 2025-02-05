import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import Orchid from './components/Orchid/Orchid'

function App() {
  const DATA = [
    {
      name: "Orchid",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid1.png",
      color: "Pink",
      numberOfLike: 192,
      origin: "Taiwan",
      category: "Cattleya"
    },

    {
      name: "Orchid",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid2.png",
      color: "Pink",
      numberOfLike: 192,
      origin: "Taiwan",
      category: "Cattleya"
    },

    {
      name: "Orchid",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid3.png",
      color: "Pink",
      numberOfLike: 192,
      origin: "Taiwan",
      category: "Cattleya"
    },

    {
      name: "Orchid",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid4.png",
      color: "Pink",
      numberOfLike: 192,
      origin: "Taiwan",
      category: "Cattleya"
    },

    {
      name: "Orchid",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "orchid5.png",
      color: "Pink",
      numberOfLike: 192,
      origin: "Taiwan",
      category: "Cattleya"
    },

    {
      name: "Orchid",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid6.png",
      color: "Pink",
      numberOfLike: 192,
      origin: "Taiwan",
      category: "Cattleya"
    },

    {
      name: "Orchid",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid7.png",
      color: "Pink",
      numberOfLike: 192,
      origin: "Taiwan",
      category: "Cattleya"
    },

    {
      name: "Orchid",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid8.png",
      color: "Pink",
      numberOfLike: 192,
      origin: "Taiwan",
      category: "Cattleya"
    },

    {
      name: "Orchid",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid9.png",
      color: "Pink",
      numberOfLike: 192,
      origin: "Taiwan",
      category: "Cattleya"
    },

    {
      name: "Orchid",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid10.png",
      color: "Pink",
      numberOfLike: 192,
      origin: "Taiwan",
      category: "Cattleya"
    },

    {
      name: "Orchid",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid11.png",
      color: "Pink",
      numberOfLike: 192,
      origin: "Taiwan",
      category: "Cattleya"
    },
    {
      name: "Orchid",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid12.png",
      color: "Pink",
      numberOfLike: 192,
      origin: "Taiwan",
      category: "Cattleya"
    },
    {
      name: "Orchid",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid13.png",
      color: "Pink",
      numberOfLike: 192,
      origin: "Taiwan",
      category: "Cattleya"
    },
    {
      name: "Orchid",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid14.png",
      color: "Pink",
      numberOfLike: 192,
      origin: "Taiwan",
      category: "Cattleya"
    },
    {
      name: "Orchid",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid15.png",
      color: "Pink",
      numberOfLike: 192,
      origin: "Taiwan",
      category: "Cattleya"
    },
    {
      name: "Orchid",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid16.png",
      color: "Pink",
      numberOfLike: 192,
      origin: "Taiwan",
      category: "Cattleya"
    },


  ]


  return (
    <>
      <Nav />
      <div className='container'>
        <div className='row'>
          {DATA.map((item) => (
            <Orchid
              name={item.name}
              rating={item.rating}
              image={item.image}
              category={item.category}
              isSpecial={item.isSpecial}
              isNatural={item.isNatural}
              color={item.color}
              numberOfLike={item.numberOfLike}
              origin={item.origin}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
