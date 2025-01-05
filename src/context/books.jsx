import { createContext } from "react";
import { useState } from "react";
const BooksContext = createContext();
function Provider({ children }) {
  const [count, setcount] = useState(5);

  const valueToShare = {
    count,
    incrementCount: () => {
      setcount(count + 1);
    },
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
