import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        });

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data: data, //Cuando el elemento de un arreglo tiene el mismo nombre de la variable que contiene el valor designado a ese elemento, se puede dejar el nombre solo, en este caso sería solo: data,
            isLoading: false,
            hasError: null
        })
    }

    useEffect(() => {
      getFetch();
    }, [url])
    


  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,

  };

}
