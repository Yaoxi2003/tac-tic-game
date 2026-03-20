import icons from '../assets/images/Img'

export default function pad({id, count, setPadData, isClicked, isCircle, isWin}) {

  const pattern = count==='o' ? true : count==='x' ? false : null

  return (
    <button onClick={() => {setPadData(
      prev => prev.map(pad =>(
        id === pad.id && !pad.isClicked
        ? {...pad, isClicked: true, isCircle: pattern}
        : pad
      ))
    )}}
    disabled={isClicked}
    className={`${isWin ? 'bg-gray-900' : 'bg-transparent '}
              min-w-[96px] min-h-[96px] sm:min-w-[140px} sm:min-h-[140px]
              rounded-md border-3 border-gray-400 
              flex justify-center items-center group`}>
        <img src={count==='o' ? icons.ovalHover : count==='x' ? icons.xHover : null} alt="" 
          className={`hidden ${!isClicked ? 'group-hover:block' : ''}`}/>

        <img className={isClicked ? 'block' : 'hidden'}
        src={isCircle && !isWin ? icons.oval : !isCircle && !isWin ? icons.x 
            : isCircle && isWin ? icons.ovalWhite : !isCircle && isWin ? icons.xWhite : null } alt='' />
    </button>
  )
}
