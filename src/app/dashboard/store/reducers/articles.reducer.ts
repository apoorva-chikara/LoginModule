
/**
 * User imports
 */
import { Article } from '../../model/article.interface';
import { ArtilcesRequestType, All } from '../actions/articles.actions';


export interface ArticleState {
  articles : Article[]
}


export const initialState: ArticleState = {
    articles: []
};

export function reducer(state = initialState, action: All): ArticleState {
  switch (action.type) {
    case ArtilcesRequestType.GET_ARTICLES: {
      return {
        ...state,
        articles: []
      };
    }
    case ArtilcesRequestType.SAVE_ARTICLES: {
        return {
          ...state,
          articles: [...action.payload]
        };
      }
    default: {
      return state;
    }
  }
}

