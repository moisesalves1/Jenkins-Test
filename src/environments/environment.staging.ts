import packageInfo from '../../package.json'

export const environment = {
    production: false,
    env: 'staging',
    version : packageInfo.version
}