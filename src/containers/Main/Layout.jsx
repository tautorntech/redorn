import React from 'react'
import { Header } from 'components'
import {
  ContainerStyled,
  ContentStyled,
} from './styles'


const Layout = ({ children }: IProps) => {
  return (
    <ContainerStyled>
      <Header />
      <ContentStyled>
        {children}
      </ContentStyled>
    </ContainerStyled>
  )
}

export default Layout