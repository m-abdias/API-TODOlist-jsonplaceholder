import styled from 'styled-components'

export const Content = styled.div`
  margin: 0;
  padding: 0;
`

export const Header = styled.header`
  background-color: #6d28d9;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 600px 0 30px;
  color: #b8ff01;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-transform: uppercase;
  font-size: 2rem;
  margin-bottom: 5vh;

  @media (max-width: 767px) {
    padding: 0 130px 0 30px;
  }
`

export const CardAssignments = styled.div`
  padding: 10px;
  display: flex;
  width: 50vw;
  height: 3vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  align-items: center;
  justify-content: space-between;
  background-color: #b8ff01;
  color: #6d28d9;
  border-radius: 5px;
  margin: auto;
  margin-top: 1vh;

  @media (max-width: 760px) {
    width: 70vw;
    height: 100%;
    
  }
`

export const ImputAssignments = styled.div`
  display: flex;

  align-items: center;

  gap: 15px;
  border-radius: 5px;
`

export const FormNewAssignment = styled.form`
  display: flex;
  justify-content: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

export const InputNewAssignment = styled.input`
  width: 25vw;
  padding-left: 10px;
  text-align: left;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 0.5px solid #6d28d9;
  color: #6d28d9;
  margin-bottom: 2vh;
`

export const ButtonAddNewAssignment = styled.button`
  padding: 1vh 1vw;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 0.5px solid #6d28d9;
  background-color: #6d28d9;
  color: #b8ff01;
  cursor: pointer;
  margin-bottom: 2vh;
`

export const List = styled.li`
  list-style-type: none;
`

export const ButtonDelete = styled.button`
  background-color: #b8ff01;
  color: #6d28d9;
  border: none;
  cursor: pointer;
  &:hover {
    color: #6d28d9;
    font-weight: 500;
    background-color: hsl(#6d28d9);
    -webkit-transform: scale(1.25);
    -ms-transform: scale(1.25);
    transform: scale(1.25);
  }
`
