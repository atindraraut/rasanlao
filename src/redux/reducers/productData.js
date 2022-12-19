import {SET_PRODUCT_LIST} from "../constants/homeConstants"

// this returns the updated state of the state object
export const productData = (data = {}, action) => {
    switch (action.type) {
            case SET_PRODUCT_LIST:
                console.log("PRODUCT_LIST condition ", action.data)
                return {...action.data}
        default:
            return data
    }
}