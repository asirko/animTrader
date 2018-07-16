// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDLgxuoI-5CtYF5y2PrNlvWG2g7Ay6y2AU',
    authDomain: 'anim-trader.firebaseapp.com',
    databaseURL: 'https://anim-trader.firebaseio.com',
    projectId: 'anim-trader',
    storageBucket: 'anim-trader.appspot.com',
    messagingSenderId: '395720952420',
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
