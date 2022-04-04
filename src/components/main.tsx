import React, {useEffect, useState} from 'react'

export default () => {
  const [tmp, setTmp] = useState("")
  const [input, setInput] = useState("")
  const onChange = (e: any) => {
    setTmp(e.target.value)
  }
  const onInput = () => {
    setInput(tmp)
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
