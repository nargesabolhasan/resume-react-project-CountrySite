import { createContext,useState} from "react";

export const titleContext = createContext();

const TitleContextprovider = (props) => {
  const [text, setText] = useState();
  const [editMoode, setEditMoode] = useState(false)
  const { children } = props;

  const value = {
    text,
    editMoode,
    addToText: (input) => setText(input),
    changeEditMoode: (input) => setEditMoode(input)
  };
  return (
    <titleContext.Provider value={value}>{children}</titleContext.Provider>
  );
};

export default TitleContextprovider;
