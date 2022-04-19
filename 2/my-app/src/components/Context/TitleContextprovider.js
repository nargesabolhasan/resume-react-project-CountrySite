import { createContext, useState } from "react";

export const titleContext=createContext()

const TitleContextprovider = (props) => {
  const [title, setTitle] = useState()
  const [paragraph, setParagraph] = useState('')
  const { children} = props

  const value = {
    title,
    paragraph,
    addToTitle: (input) => setTitle(input),
    addToParagraph: (input) => setParagraph(input),
}
  return (
    <titleContext.Provider value={value} >{children}</titleContext.Provider>
  )
}

export default TitleContextprovider