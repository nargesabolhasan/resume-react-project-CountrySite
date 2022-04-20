import { createContext, useState } from "react";

export const titleContext=createContext()

const TitleContextprovider = (props) => {
  const [text, setText] = useState({
    title:'',
    paragraph:''
  })
  const [editMoode, setEditMoode] = useState(false)
  const { children} = props

  const value = {
    editMoode,
    text,
    addToTitle: (input) => setText({...text,title:input}),
    addToParagraph: (input) => setText({...text,paragraph:input}),
    changeEditMoode: (input) => setEditMoode(input)
}
  return (
    <titleContext.Provider value={value} >{children}</titleContext.Provider>
  )
}

export default TitleContextprovider