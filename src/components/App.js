import React, {useState} from 'react'

const App = () => {
  const [relative, setrelative] =useState([relativeListItem1 ,relativeListItem2 ,relativeListItem3,relativeListItem4])
  return (
    <div id="main">
      <ol>
      {relative.map((rel ,ind)=>{
        return 
        <li key={rel + ind}>Name : {rel}</li>
      })}
      </ol>
    </div>
  )
}

export default App
