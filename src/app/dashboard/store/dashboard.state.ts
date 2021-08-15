import { createFeatureSelector, createSelector, State } from "@ngrx/store";
import * as articleState from "./reducers/articles.reducer";

//top-level state interface
export interface DashBoardState {
    articlesList: articleState.ArticleState[];
}

export const reducers = {
    dashboard: articleState.reducer
  };

  export const selectArticles = createFeatureSelector<DashBoardState>('Dashboard');

// export const selectAuthState = createSelector(
//     getAuthState,
//     (state: AppState) => state.authState,
//     () => {}
// );