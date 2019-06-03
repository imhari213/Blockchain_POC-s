// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  getDebtorAPI: 'http://52.172.13.43:3333/getDebtor',
  getSecuredPartyAPI: 'http://52.172.13.43:3333/getsecuredparties',
  getCollateralAPI: 'http://52.172.13.43:3333/getcollaterol',
  getStatesAPI: 'http://52.172.13.43:3333/getstates',
  getJurisdictionAPI: 'http://52.172.13.43:3333/getjurisdictions',
  postNewFilling: 'http://52.172.13.43:3333/submitdoc',
  postToBlockChain: 'http://52.172.13.43:5000/api/org.example.mynetwork.NewFilling',
  getNewFillingFromBlock: 'http://52.172.13.43:5000/api/org.example.mynetwork.NewFilling/',
  postHashToBlock : 'http://52.172.13.43:5000/api/org.example.mynetwork.StoreHash',
  postTransactionId : 'http://52.172.13.43:3333/postTransactionId',
  getDataFromDB : 'http://52.172.13.43:3333/showFilling',
  getTransactionDetails : 'http://52.172.13.43:5000/api/org.example.mynetwork.StoreHash/',
  postPdf : 'http://52.172.13.43:3333/getpdf',
  getPdf : 'http://52.172.13.43:3333/getpdf',
  websocketUrl : 'ws://52.172.13.43:5000'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
