import { createFeatureSelector, createSelector, State } from "@ngrx/store";
import * as auth from "./reducers/auth.reducer";

//top-level state interface
export interface AppState {
    authState: auth.State;
}

export const reducers = {
    auth: auth.reducer
  };

  export const selectAuthState = createFeatureSelector<AppState>('auth');

// export const selectAuthState = createSelector(
//     getAuthState,
//     (state: AppState) => state.authState,
//     () => {}
// );