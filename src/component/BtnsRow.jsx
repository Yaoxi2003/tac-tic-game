import { Link } from "react-router-dom"
import icons from '../assets/images/Img'
import buttons from '../assets/componentClasses/allClasses'
import data from "../assets/data"
import { useEffect, useState } from "react"

export default function btnsRow({count, setPadData, firstPlayer, setCount}) {

  const [reset, setReset] = useState(false)

  useEffect(() => {
    setCount(firstPlayer.current)
    setReset(false)
  }, [reset])

  return (
    <div className="flex gap-4 items-center">
        <Link to='/'
            className={buttons.smallBtn}>
          <img src={icons.leave} />
          quit
        </Link>
        
        <button onClick={() => {
          setPadData(data)
          setReset(true)
        }}
          className={buttons.smallBtn}>
          <img src={icons.refresh} />
          reset
        </button>

        <div className={`${buttons.smallBtn} hover:bg-transparent`}>
          turn: 
          <img src={count==='o' ? icons.oval : count==='x' ? icons.x : null} 
            className="object-cover w-5 h-5" />
        </div>
    </div>
  )
}
