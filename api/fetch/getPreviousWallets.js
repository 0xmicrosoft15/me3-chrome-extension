import { requestOfGet } from "../utils/helpers";
import apiConst from '../config/constants.js'

export async function getPreviousWallets(params = {}) {
    let result = await requestOfGet({
        url: apiConst.GET_ALL_PREVIOUS_WALLET,
        params
    })
    return result.data
}