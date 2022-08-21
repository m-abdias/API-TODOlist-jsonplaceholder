import React from 'react'
import { ErrorImage, ErrorPageContainer, Text } from './styled'
import error from '../../assets/error.png'

const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <ErrorImage src={error} />
      <Text>Erro 404 - Página não encontrada</Text>
    </ErrorPageContainer>
  )
}

export default ErrorPage
