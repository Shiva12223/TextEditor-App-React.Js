import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #25262c;
  padding: 50px;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #1b1c22;
  height: 50vh;
  width: 100%;
  padding: 10px;
  gap: 10px;
`
export const TextEditorImage = styled.img`
  height: 350px;
  width: 300px;
`
export const TextEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #25262c;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  border: 1px solid #334155;
  color: #f1f5f9;
  padding-top: 0px;
`
export const ButtonsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #334155;
  height: 50px;
  list-style-type: none;
  padding: 0px;
  padding-bottom: 10px;
`
export const ListItem = styled.li`
  padding: 5px;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
`
export const TextEditorImgAndHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

export const Heading = styled.h1`
  color: #f1f5f9;
  font-family: 'Roboto';
`
export const TextAreaElement = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 15px;
  height: 100%;
  border-radius: 5px;
  background-color: #25262c;
  border: none;
  outline: none;
  cursor: pointer;
  color: #f1f5f9;
  font-family: 'Roboto';
`
export const TextAreaContainer = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`
