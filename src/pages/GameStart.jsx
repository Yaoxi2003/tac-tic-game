import ScoreRow from '../component/ScoreRow'
import BtnRow from '../component/BtnsRow'
import Pad from '../component/Pad'
import data from '../assets/data'
import EndMessage from '../component/EndMessage'
import { useState, useEffect, useRef } from 'react'

export default function GameStart({count, setCount, firstPlayer}) {

  const [padData, setPadData] = useState(data)
  const [winner, setWinner] = useState({x: false, o: false, tie: false})
  const [score, setScore] = useState({oScore: 0, xScore: 0, tie: 0})
  const firstRender = useRef(true)
  const win = winner.x ? 'x' : winner.o ? 'o' : count

  function reset() {
    setCount(win)
    setPadData(data)
    setWinner({x: false, o: false, tie: false})
    console.log(win)
  }
  
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

   if (winner.x || winner.o || winner.tie) return

    const winSet = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]

    const currentSetForX = padData.filter(pad => pad.isClicked && !pad.isCircle).map(pad => pad.id)
    const currentSetForO = padData.filter(pad => pad.isClicked && pad.isCircle).map(pad => pad.id)

    const winningSet = winSet.find(set => 
      set.every(id => currentSetForO.includes(id)) || 
      set.every(id => currentSetForX.includes(id))
    )

    const isfull = padData.every(
      pad => pad.isClicked
    )

    if (winningSet) {
      const isOWin = winningSet.every(id => currentSetForO.includes(id))
      
      setPadData(prevData => prevData.map(pad => 
        winningSet.includes(pad.id) ? { ...pad, isWin: true } : pad
      ))

      if (isOWin) {
        setScore(prev => ({...prev, oScore: prev.oScore + 1}))
      }
      else {
        setScore(prev => ({...prev, xScore: prev.xScore + 1}))
      }

      setWinner({ x: !isOWin, o: isOWin, tie: false })
    } 

    else if (isfull && !winningSet) {
      setScore(prev => ({...prev, tie: prev.tie + 1}))
      setWinner({x: false, o: false, tie: true})
    }

    else {
      const isBoardEmpty = padData.every(pad => !pad.isClicked);
  
      if (!isBoardEmpty) {
        setCount(prev => prev === 'o' ? 'x' : 'o');
      }
    }
  }, [padData])
  

  const pads = padData.map(
    pad => <Pad key={pad.id} id={pad.id} isClicked={pad.isClicked} 
    isCircle={pad.isCircle} setPadData={setPadData} count={count} 
    isWin={pad.isWin}/>
  )

  return (
    <main className="container-pro pd-t-lg">
        <div className='max-w-[460px] mx-auto flex flex-col gap-5'> 
            <ScoreRow score={score} firstPlayer={firstPlayer} />
            <div className='w-full grid grid-cols-3 gap-4'>
              {pads}
            </div>
            <BtnRow count={count} setPadData={setPadData} setCount={setCount} firstPlayer={firstPlayer}/>
        </div>

        { winner.x || winner.o || winner.tie
          ? <EndMessage winner={winner} firstPlayer={firstPlayer} reset={reset} />
          : null
        }
    </main>
  )
}
