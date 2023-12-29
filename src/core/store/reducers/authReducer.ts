type TAuthUser = {
  user: {
    email: string;
    isAuthenticated: boolean;
  };
};

// Action Types
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";

// Action Creators
const loginUser = (email: string) => ({
  type: LOGIN_USER,
  payload: email,
});
const logoutUser = () => ({ type: LOGOUT_USER });

const initialState: TAuthUser = {
  user: {
    email: "",
    isAuthenticated: false,
  },
};

const authReducer = (state = initialState, action: any): TAuthUser => {
  switch (action.type) {
    case LOGIN_USER:
      return { user: { email: action.payload, isAuthenticated: true } };
    case LOGOUT_USER:
      return { user: { email: "", isAuthenticated: false } };
    default:
      return state;
  }
};

export { loginUser, logoutUser, authReducer };
