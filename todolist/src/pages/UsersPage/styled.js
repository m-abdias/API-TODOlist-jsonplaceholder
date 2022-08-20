import styled from 'styled-components'

export const Header = styled.header`
  background-color: #6d28d9;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b8ff01;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-transform: uppercase;
  font-size: 2rem;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 15px;
  grid-gap: 10px;
  padding-inline-start: 0;
`
