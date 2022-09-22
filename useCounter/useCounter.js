import { useState } from "react"

export const useCounter = (initialValue = 0) => {
  
    const [counter, setCounter] = useState(initialValue)
  
    const increment = (value = 1) => {
        setCounter( counter + value )
    }

    const reset = () => {
         setCounter( initialValue )
    }

    const decrement = (value = 1) => {
        if((counter - value ) < 1) return;

        setCounter( counter - value );
    }
  
  return {
    counter,
    increment,
    reset,
    decrement
  }
}
