import { createContext, useContext, useState } from "react";

const appContext = createContext(null)

const AppContext = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(()=>
        JSON.parse(localStorage.getItem("currentUser"))
    )
    const [wishList, setWishList] = useState(() =>
        JSON.parse(localStorage.getItem('wishlist')))
    
    const getWishList = () => {
        const allUsersWishList = JSON.parse(localStorage.getItem('wishlist'))
        const myWishList = allUsersWishList?.filter(wish => wish.userId === currentUser.id)
        setWishList(myWishList)
    }
    const addToWishList = (movieData) => {
        const allUsersWishList = JSON.parse(localStorage.getItem('wishlist'))
       const newWishlist= allUsersWishList?.push({
            ...movieData,
            userId:currentUser.id
        })
        localStorage.setItem('wishlist',JSON.stringify(allUsersWishList))
      setWishList(newWishlist)
    }
    const removeWishList = (movieId) => {
        const allUsersWishList = JSON.parse(localStorage.getItem('wishlist'))
      const update =  allUsersWishList?.filter(wish => wish.movieId !== movieId )
        localStorage.setItem('wishlist', JSON.stringify(update))
        setWishList(update)
    }
    const login = (userData) => {
        setCurrentUser(userData)
        localStorage.setItem('currentUser',JSON.stringify(userData))
    }
    const logout = () => {
        setCurrentUser(null)
        localStorage.setItem('currentUser',null)
    }
    const auth =()=> !!currentUser
    return <appContext.Provider value={{
        auth,
        login,
        logout,
        addToWishList,
        wishList,
        getWishList,
        removeWishList
    }}>{children}</appContext.Provider>
}

export default AppContext



export const useAppContext = ()=>useContext(appContext)