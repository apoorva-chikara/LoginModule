import { User } from '../../entry-point/model/login.interface';

import { AuthActionTypes, All } from '../actions/loginSignup.action';

export interface State {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object
  user: User | null;
  // error message
  errorMessage: string | null;
}


export const initialState: State = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
};

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    
    case AuthActionTypes.LOGIN_SUCCESS: {

      return {
        ...state,
        isAuthenticated: true,
        user: {
          accessToken: action.payload.token,
          email: action.payload.email
        },
        errorMessage: null
      };
    }
    case AuthActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        user: null,
        errorMessage: action.payload.error.message
      };
    }
    case AuthActionTypes.SIGNIN_SUCCESS: {
      return {
        ...state,
        user: {
           email: action.payload.email
        },
        errorMessage: null
      };
    }
    case AuthActionTypes.SIGNIN_FAILURE: {
      return {
        ...state,
        user: null,
        errorMessage: action.payload.error.message
      };
    }
    case AuthActionTypes.PASSWORDSUCCESS: {
      return {
        ...state,
        user: {
            email: action.payload
        },
        errorMessage: null
      };
    }
    case AuthActionTypes.PASSWORDFAILURE: {
      return {
        ...state,
        user: null,
        errorMessage: action.payload.error.message
      };
    }
    default: {
      return state;
    }
  }
}

