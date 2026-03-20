import buttons from '../assets/componentClasses/allClasses'

export default function ScoreRow({score, firstPlayer}) {
  const {xScore, oScore, tie} = score
  console.log(score)
  const oIsFirst = firstPlayer.current==='o' ? true : false
  const order = oIsFirst ? ['O (p1)', 'X (p2)'] : ['O (p2)', 'X (p1)'] 
  const scoreSet = [
    {
      score: oScore,
      title: order[0],
    },
    {
      score: tie,
      title: 'tie'
    },
    {
      score: xScore,
      title: order[1],
    }
  ]

  const scorePad = scoreSet.map(
    (item, index) => (
      <div key={index} className={buttons.panel}>
        <p className='text-body-lg'>{item.title}</p>
        <p className='text-body-sm font-black'>{item.score}</p>
      </div>
    )
  )

  return (
    <section className='flex items-center gap-4 justify-between'>
      {scorePad}
    </section>
  )
}
