// Action Types
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";

// Action Creators
const loginUser = () => ({
  type: LOGIN_USER,
});
const logoutUser = () => ({ type: LOGOUT_USER });

const initialState = {
  user: { isAuthenticated: false },
};

const authReducer = (state = initialState, action: any): { user: any } => {
  switch (action.type) {
    case LOGIN_USER:
      return { user: { isAuthenticated: true } };
    case LOGOUT_USER:
      return { user: { isAuthenticated: false } };
    default:
      return state;
  }
};

export { loginUser, logoutUser, authReducer };
