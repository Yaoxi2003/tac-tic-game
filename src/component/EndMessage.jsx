import buttons from "../assets/componentClasses/allClasses"
import icons from "../assets/images/Img"
import { Link } from "react-router-dom"

export default function EndMessage({winner, firstPlayer, reset}) {

  const iswin = winner.o || winner.x ? true : winner.tie ? false : null
  const order = iswin 
    ? (winner.x && firstPlayer === 'x') || (winner.o && firstPlayer === 'o') ? 1 : 2
    : null

  return (
    <div className="fixed z-10 left-0 top-1/2 
      -translate-y-1/2  w-full py-10 
      bg-gray-900 text-center text-white
      flex flex-col items-center gap-4">

        { iswin ? <p>{`player ${order} wins!`}</p>
          : ''}

        { iswin ? <div className="flex items-center gap-6">
          <img src={winner.x ? icons.xWhite : winner.o ? icons.ovalWhite : null} alt="" />
          <h1>TAKES THE ROUND</h1>
        </div>
        : <h1>ROUND TIED</h1>
      }

        <div className="flex items-center gap-4">
          <Link to='/' className={buttons.secondaryBtn}>QUIT</Link>
          <button onClick={reset} className={buttons.secondaryBtn} >NEXT ROUND</button>
        </div>
    </div>
  )
}


