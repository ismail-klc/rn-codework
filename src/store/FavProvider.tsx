import AsyncStorageLib from "@react-native-async-storage/async-storage"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducers from "./reducers"
import React, { useEffect, useState } from 'react';

const FavProvider = ({ children }: any) => {
    const [favs, setFavs] = useState([])

    useEffect(() => {
        AsyncStorageLib.getItem('fav_jobs').then(f => {
            f ? setFavs(JSON.parse(f)) : setFavs([])
        })
    }, [])

    const store = createStore(reducers, { favs })
    return <Provider store={store}>{children}</Provider>;
}

export default FavProvider