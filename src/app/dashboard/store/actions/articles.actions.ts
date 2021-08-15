import { Action } from "@ngrx/store";

export enum ArtilcesRequestType {
    GET_ARTICLES = '[Articles] Get all',
    SAVE_ARTICLES = '[Articles] Save All',
    ARTICLE_FETCH_ERROR = '[Articles] Error in Fetching'
}

export class GetAllArticles implements Action {
    readonly type = ArtilcesRequestType.GET_ARTICLES;
    constructor() {}
}

export class SaveAllArticles implements Action {
    readonly type = ArtilcesRequestType.SAVE_ARTICLES
    constructor(public payload: any) {}
}

export class ErrorInFetch implements Action {
    readonly type = ArtilcesRequestType.ARTICLE_FETCH_ERROR;
    constructor (public payload: any) {}
}

export type All = 
       | GetAllArticles
       | SaveAllArticles
       | ErrorInFetch; 