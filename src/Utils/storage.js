import localforage from "localforage";

const tokenStore = localforage.createInstance({
    driver      : localforage.WEBSQL, // Force WebSQL; same as using setDriver()
    name        : 'TOURTOH WEB USER TOKEN',
    version     : 1.0,
    size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
    storeName   : process.env.REACT_APP_TOKEN_IDENTIFIER, // Should be alphanumeric, with underscores.
    description : 'This get the user token for authentication processes'
  });

export { tokenStore }