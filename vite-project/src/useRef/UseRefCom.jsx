import React, { useRef } from 'react'
import { Button } from 'react-bootstrap'

export default function useRefCom() {

  const inputRef = useRef(null)

  function clickFun(params) {
    inputRef.current.focus();
    inputRef.current.value = inputRef.current.value.toUpperCase();
  }

  return (
    <>
      <h1>UseRefCom</h1>
      <input ref={inputRef} type='text' />
      <Button onClick={() => clickFun()} >Click</Button>
    </>
  )
}
