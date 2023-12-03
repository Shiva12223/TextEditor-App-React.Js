import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppContainer,
  ResponsiveContainer,
  TextEditorImage,
  TextEditorContainer,
  ButtonsContainer,
  ListItem,
  Button,
  TextEditorImgAndHeadingContainer,
  Heading,
  TextAreaElement,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    textInput: '',
    activeButton: {bold: false, italic: false, underline: false},
  }

  handleTextInput = event => {
    this.setState({textInput: event.target.value})
  }

  handleButtonClick = buttonType => {
    this.setState(prevState => {
      const newActiveButtons = {
        ...prevState.activeButton,
        [buttonType]: !prevState.activeButton[buttonType],
      }
      return {activeButton: newActiveButtons}
    })
  }

  render() {
    const {activeButton, textInput} = this.state
    const bold = activeButton.bold ? 'bold' : 'normal'
    const italic = activeButton.italic ? 'italic' : 'normal'
    const underline = activeButton.underline ? 'underline' : 'normal'

    return (
      <AppContainer>
        <ResponsiveContainer>
          <TextEditorImgAndHeadingContainer>
            <Heading>Text Editor</Heading>
            <TextEditorImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TextEditorImgAndHeadingContainer>
          <TextEditorContainer>
            <ButtonsContainer>
              <ListItem>
                <Button
                  onClick={() => this.handleButtonClick('bold')}
                  color={activeButton.bold ? '#faff00' : '#f1f5f9'}
                  data-testid="bold"
                >
                  <VscBold size={25} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  onClick={() => this.handleButtonClick('italic')}
                  color={activeButton.italic ? '#faff00' : '#f1f5f9'}
                  data-testid="italic"
                >
                  <GoItalic size={25} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  onClick={() => this.handleButtonClick('underline')}
                  color={activeButton.underline ? '#faff00' : '#f1f5f9'}
                  data-testid="underline"
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </ListItem>
            </ButtonsContainer>
            <TextAreaElement
              style={{
                fontWeight: bold,
                fontStyle: italic,
                textDecoration: underline,
              }}
              name="myText"
              rows="4"
              columns="50"
              value={textInput}
              onInput={e => this.handleTextInput(e)}
            />
          </TextEditorContainer>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}
export default TextEditor
