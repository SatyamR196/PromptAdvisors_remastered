import React from 'react'
import "../Components/stylesheets/newsroom_style.css"
import Line_title from '../micro_components/Line_title'
import Button from '../micro_components/Button'
import News_card from '../micro_components/News_card'

function Newsroom() {
  return (
    <div className='Newsroom_container' >
        <Line_title text="KEEP UP WITH OUR LATEST NEWS" theme="dark"/>
        <div className="News_head">
          <div className="N_heading">Newsroom</div>
          <Button text='See Media Centre' width={200} BG='white' tColor='black'/>
        </div>
        <div className="News_main">
          <a className='n1 item' href="https://www.youtube.com/watch?v=w1amPWUsl_Y"><News_card title="How to Build Custom GPTs with 100% Accuracy" date="Oct 02, 2024" Linkurl="https://www.youtube.com/watch?v=w1amPWUsl_Y" imgurl="https://cdn.prod.website-files.com/65d244ea4c0a038c1f7e8a52/66fd52bee752d17cd94c40da_hqdefault.jpeg"/></a>
          <a className='n2 item' href="https://www.youtube.com/watch?v=2VxFY0EYvg8"><News_card title="How to Test Any Prompt in AI no one talks about this" date="Sep 26, 2024" Linkurlurl="https://www.youtube.com/watch?v=2VxFY0EYvg8" imgurl="https://cdn.prod.website-files.com/65d244ea4c0a038c1f7e8a52/66f5a8d1dfc0be58e85ed645_hqdefault.jpeg"/></a>
          <a className='n3 item' href="https://www.youtube.com/watch?v=E-T8QLdLuBQ"><News_card title="How to Prompt OpenAI's o1 Models Like A Pro" date="Sep 19, 2024" Linkurl="https://www.youtube.com/watch?v=E-T8QLdLuBQ" imgurl="https://cdn.prod.website-files.com/65d244ea4c0a038c1f7e8a52/66ec595ec264f2e1bcdf3768_hqdefault.jpeg"/></a>
          <a className='n4 item' href="https://www.youtube.com/watch?v=afd9Qwuk_WE"><News_card title="It Finally Thinks! OpenAI's New o1 Models" date="Sep 13, 2024" Linkurl="https://www.youtube.com/watch?v=afd9Qwuk_WE" imgurl="https://cdn.prod.website-files.com/65d244ea4c0a038c1f7e8a52/66e46257183ae37d678c94f2_hqdefault.jpeg"/></a>
        </div>
    </div>
  )
}

export default Newsroom
