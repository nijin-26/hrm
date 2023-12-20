// Action Types
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";

// Action Creators
const loginUser = (authToken: string) => ({
  type: LOGIN_USER,
  payload: authToken,
});

const logoutUser = () => ({ type: LOGOUT_USER });

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action: any): { user: any } => {
  switch (action.type) {
    case LOGIN_USER:
      return { user: { authToken: action.payload.authToken } };
    case LOGOUT_USER:
      return { user: null };
    default:
      return state;
  }
};

export { loginUser, logoutUser, authReducer };
