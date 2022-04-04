import React, {useEffect, useState} from 'react'

export default () => {
  const [tmp, setTmp] = useState("")
  const [input, setInput] = useState(null)
  const onChange = (e: any) => {
    setTmp(e.target.value)
  }
  const onInput = () => {
    switch (tmp) {
      case '-h':
        setInput(<HelpBlock />)
        break
      default:
        setInput(<HelpBlock />)
        break
    }
  }

  return (
    <>
      <input type="text" value={tmp} onChange={onChange} />
      <button onClick={onInput}>submit</button>
      <div>
        {input}
      </div>
    </>
  )
}

export const HelpBlock = () => {
  return <>help</>
}
