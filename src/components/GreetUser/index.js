import {useState} from 'react'

import {
    MainContainer,
    SubHeading,
    InputUser,
    MsgContent,
    NameText
} from './styledComponent'

const GreetUser = () => {
    const [name , setName] = useState("")
    const onChangeName = event =>{
        setName(event.target.value)
    }
  return (
    <MainContainer>
      <SubHeading>Greet User</SubHeading>
      <InputUser type='text' onChange={onChangeName} placeholder='Enter The Name' value={name}/>
      <MsgContent> Hello <NameText>{name}</NameText> </MsgContent>
    </MainContainer>
  )
}

export default GreetUser
