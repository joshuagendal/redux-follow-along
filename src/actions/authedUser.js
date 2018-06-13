const SET_AUTHED_USER = 'SET_AUTHED_USER';

const setAuthedUser = (id) => {
  return {
    type: SET_AUTHED_USER,
    id,
  }
};

module.exports = {
  SET_AUTHED_USER,
  setAuthedUser
}