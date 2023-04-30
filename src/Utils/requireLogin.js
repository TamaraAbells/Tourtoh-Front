import { tokenStore } from "./storage";

const requireLogin = async(to, from, next) => {
  const token = await tokenStore.getItem('TOKEN')
  if (to.meta.auth) {
    if (token) {
      next();
    }
    next.redirect('/');
  } else {
    next();
  }
};

export default requireLogin;