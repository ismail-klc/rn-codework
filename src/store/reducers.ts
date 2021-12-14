import AsyncStorageLib from "@react-native-async-storage/async-storage";

export default function reducers(state: any, action: any) {
    let favs = state.favs;
    switch (action.type) {
        case "ADD_FAV":
            const { data } = action.payload;
            if (favs.find((a: { id: any; }) => a.id === data.id)) {
                return state;
            }

            favs.push(data)
            AsyncStorageLib.setItem('fav_jobs', JSON.stringify(favs))

            return {
                favs: [...favs]
            };
        case "REMOVE_FAV":
            const { id } = action.payload;

            favs = favs.filter(a => {
                return a.id !== id
            })
            AsyncStorageLib.setItem('fav_jobs', JSON.stringify(favs))

            return {
                favs: [...favs]
            };
        default:
            return state;
    }
}