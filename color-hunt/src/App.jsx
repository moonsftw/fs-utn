import './App.css'
import Tarjeta from './Components/Tarjeta/Tarjeta'

function App() {
  const tarjetas = [
    {
      colors: ["#000000", "#FF4191", "#E90074", "#FFF078"],
      likes: 56,
      fecha: "14 hours",
      id: 0,
    },
    {
      colors: ["#EEEDEB", "#E6B9A6", "#939185", "#2F3645"],
      likes: 229,
      fecha: "Yesterday",
      id: 1,
    },
    {
      colors: ["#36BA98", "#E9C46A", "#F4A261", "#E76F51"],
      likes: 235,
      fecha: "2 days",
      id: 2,
    },
    {
      colors: ["#667BC6", "#FDFFD2", "#FFB4C2", "#DA7297"],
      likes: 442,
      fecha: "3 days",
      id: 3,
    },
  ]

  return (
    <>
      <Tarjeta tarjetaColor={tarjetas} style={{width:'200px'}}/>
    </>
  )
}

export default App
