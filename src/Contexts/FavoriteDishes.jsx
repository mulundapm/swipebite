import { createContext , useState} from "react";
import React from "react";

export const FavoriteContext = createContext()

export const FavoriteProvider = ({children}) =>{
    const [favoriteDishes, setFavoriteDishes] = useState([])
return (
        <FavoriteContext.Provider value={{favoriteDishes, setFavoriteDishes}}>
            {children}
        </FavoriteContext.Provider>
    )
}

