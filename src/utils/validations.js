


export default {
  strongPassword(values, value) {
    if (typeof value !== 'undefined' && !value.match(new RegExp('^[A-Za-z0-9]{6,}$'))) {
      return false;
    }
    return true;
  },
  isGoodTitle(values, value) {
    if (!value.match(new RegExp('^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$'))) {
      return false;
    }
    return true;
  },
  passwordsMatch(values, value) {
    if (values.userPassword !== value) {
      return false;
    }
    return true;
  },
  goodLogin(values, value) {
      if (typeof value !== 'undefined' && 
          !value.match(new RegExp('^[a-zA-Z0-9]+([-_]?[a-zA-Z0-9]+){0,2}$'))) {
      return false;
      }
    return true;
    }
}