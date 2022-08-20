import styled from 'styled-components'

export const CardUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 22vh;
  width: 100%;
  border: 0.5px solid #b8ff01;
  border-radius: 5px;
`

export const Name = styled.h1`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  color: black;
`

export const Button = styled.button`
  padding: 8px 50px;

  max-width: 100%;
  color: #6d28d9;
  background-color: #b8ff01;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    color: #b8ff01;
    font-weight: 500;
    background-color: hsl(263, 70%, 50%);
    -webkit-transform: scale(0.95);
    -ms-transform: scale(0.95);
    transform: scale(0.95);
  }
`
