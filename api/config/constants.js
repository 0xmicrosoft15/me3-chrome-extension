module.exports = {
    // BASE_URL: 'https://wallet.me3.io//me3-api', // prod
    // BASE_URL: 'https://pre-wallet-prod.me3.io/me3-api', //preprod
    BASE_URL: 'https://avarta-official-dev.avarta.io/me3-api', //dev
    GET_ACCESS_TOKEN: '/api/gameInfo/googleCode',
    SET_GET_DRIVE_FILE_ID: '/api/light/userfileId',
    GET_ALL_PREVIOUS_WALLET: '/api/light/secretList',
    GET_CHAIN_LIST: '/api/mainChain/list',
    ADD_SYMBOL_ADDRESS_NOTE: '/api/lightsymboladdress/addAddress',
    ADD_WALLET: '/api/light/addWallet',
    GET_COIN: '/api/light/focus_coin_list?',
    GET_TOTAL_ASSETS: '/api/mainChain/totalAssets',
    GET_FOCUS_CHAINS: '/api/mainChain/focusList',
    GET_CHAIN_ASSETS: '/api/mainChain/chainAssets',
    GET_SUPPORT_CURRENCY: '/api/light/supportCurrency',
    GET_COIN_DETAIL: '/api/light/coinDetail',
    GET_UTX_TO_LIST: '/api/light/forward/getUtxo',
    GET_TOKENS_TO_IMPORT: '/api/light/searchToken',
    FOLLOW_TOKEN: '/api/light/add_coin_focus',
    SEND_BTC_TRANSACTION: '/api/light/forward/sendRawTransaction',
    GET_SWAP_TOKEN_LIST: '/api/light/swapCoin',
    ADD_CUSTOM_TOKEN: '/api/light/importToken',
    GET_NFT_LIST: '/api/light/focus_nft_list',
    GET_HISTORY: '/api/lightaddresstransactionlog/txHistory',
    GET_NFT_DETAIL: '/api/light/nftDetail',
    API_KEY_EXCHANGE: '/api/light/exchange/key',
    API_REGISTER: '/api/light/register'
}
