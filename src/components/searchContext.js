import { createContext, React, useState } from "react";


const SearchContext = createContext()

export const SearchContextProvider = (props)=>{
    const [searchname,setSearchname]=useState('')
    const [searchchild,setSearchchild]=useState('')
    const [searchDate,setSearchDate] = useState('')
    const [self , setSelfpaced] = useState (true)
    const [pageNumber,setPageNumber] = useState(0)
return(
    <SearchContext.Provider
        value={{
            searchname,
            setSearchname,
            searchchild,
            setSearchchild,
            searchDate,
            setSearchDate,
            pageNumber,
            setPageNumber,
            self,
            setSelfpaced
        }}
    >
        {props.children}
    </SearchContext.Provider>
)}

export default SearchContext;
