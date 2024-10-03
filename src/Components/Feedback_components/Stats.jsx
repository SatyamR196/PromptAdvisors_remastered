import React from 'react'
import "../stylesheets/stats_style.css"
import Line_title from '../../micro_components/Line_title'
import S_cube from '../../micro_components/S_cube'

function Stats() {
  return (
    <div className='stats_container'>
        <Line_title text="PROMPT ADVISERS BY THE NUMBERS" theme="dark"/>
        <div className="stats_grid">
          <S_cube num="Countless Opportunities" text="For Growth with AI" cls="grid-col-span"/>
          <S_cube num="20" text="Bespoke AI Products Delivered"></S_cube>
          <S_cube num="20" text="Bespoke AI Products Delivered"></S_cube>
          <S_cube num="20" text="Bespoke AI Products Delivered"></S_cube>
          <S_cube num="20" text="Bespoke AI Products Delivered"></S_cube>
          <S_cube num="20" text="Bespoke AI Products Delivered"></S_cube>
          <S_cube num="20" text="Bespoke AI Products Delivered"></S_cube>
        </div>
    </div>
  )
}

export default Stats
