import { useEffect } from 'react'
import axios from 'axios'

const useRequestData = (data, setData, url) => {
  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.log(error)
        alert('Ocorreu um erro, tente novamente')
      })
  }, [url, setData])

  return data
}

export default useRequestData
