import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import Orchid from './components/Orchid/Orchid'


// export default function App(){

// var count = 1;
// statue: trang thai
// React 16.8 tro73 ve62 trc => clas component
// Hook:...
// useState, useEffect

//   const [count, setCount] = useState(0)

//   return(
//     <>
//       <h1>Count: {count}</h1>
//       <button className='btn btn-primary' onClick={() => 
//         setCount(count + 1)
//         }>+</button>
//     </>
//   )
// }

function App() {
  const DATA = [
    {
      name: "Orchid",
      rating: 4.5,
      isSpecial: true,
      isNatural: false,
      image: "/orchid1.png",
      color: "Pink",
      numberOfLike: 0,
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
      numberOfLike: 0,
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
      numberOfLike: 0,
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
      numberOfLike: 0,
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
      numberOfLike: 0,
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
      numberOfLike: 0,
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
      numberOfLike: 0,
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
      numberOfLike: 0,
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
      numberOfLike: 0,
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
      numberOfLike: 0,
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
      numberOfLike: 0,
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
      numberOfLike: 0,
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
      numberOfLike: 0,
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
      numberOfLike: 0,
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
      numberOfLike: 0,
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
      numberOfLike: 0,
      origin: "Taiwan",
      category: "Cattleya"
    },


  ]

  const [orchids, setOrchids] = useState(DATA)

  // Trạng thái đóng mở của Modal: true false
  const [isShow, setIsShow] = useState(false)

  const handleLike = (index) => {
    setOrchids(orchids.map((orchid, i) =>
    i === index
    ? {...orchid, numberOfLike: orchid.numberOfLike + 1}
    : orchid
    ))
  }




  return (
    <>
      <Nav />

      <div className='container'>
        <div className='row'>
          {orchids.map((item, index) => (
            <Orchid
              key={index}
              name={item.name}
              rating={item.rating}
              image={item.image}
              category={item.category}
              isSpecial={item.isSpecial}
              isNatural={item.isNatural}
              color={item.color}
              numberOfLike={item.numberOfLike}
              origin={item.origin}
              onClick={() => setIsShow(true)}
              onLike={() => handleLike(index)}
            />
          ))}
        </div>
        <div className="modal" id="exampleModal" tabindex="-1" style={{ display: isShow ? 'block' : 'none' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" onClick={() => setIsShow(false)} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div className="modal-footer">
                <button type="button" onClick={() => setIsShow(false)} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
