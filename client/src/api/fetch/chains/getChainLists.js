import { requestOfGet } from "../../utils/helpers.js";
import apiConst from '../../config/constants.js'

export async function getAllChains(params = {}) {
    let result = await requestOfGet({
        url: apiConst.GET_CHAIN_LIST,
        params
    })
    return result.data
}