export function jwtMiddleware({ dispatch, getState }) {
    return (next) => (action) => {
      switch (action.type) {
        case 'CHECK_AUTH_TOKEN' :
          if (getState().auth && getState().auth.token) {
            var tokenExpiration = jwtDecode(getState().auth.token).exp;
            var tokenExpirationTimeInSeconds = (tokenExpiration - moment(Math.floor(Date.now() / 1000)));
            if (tokenExpiration && tokenExpirationTimeInSeconds < 20) {
              history.push(i18next.t('translation:routes.auth.logout'));
            }
          }
        break;
        case 'UPDATE_AUTH_TOKEN' :
          if (getState().auth && getState().auth.token) {
            var tokenExpiration = jwtDecode(getState().auth.token).exp;
            var tokenExpirationTimeInSeconds = (tokenExpiration - moment(Math.floor(Date.now() / 1000)));
            if (tokenExpiration && tokenExpirationTimeInSeconds < 100 && tokenExpirationTimeInSeconds > 20) {
              if (!getState().auth.fetching) {
                return dispatch(refreshAuthToken(getState().auth));
              }
            }
          }
        break;
        case 'REFRESH_AUTH_TOKEN_FAIL' :
          if (getState().auth && getState().auth.token) {
            return dispatch(removeAuthToken(getState().auth)).then(response => {
              history.push(i18next.t('translation:routes.auth.logout'));
            });
          }
        break;
        }
      return next(action);
    }
  }