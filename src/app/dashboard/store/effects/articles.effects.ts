/**
 * Angular core imports
 */
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of} from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

/**
 * User imports
 */
import { ArtilcesRequestType, All, GetAllArticles, ErrorInFetch, SaveAllArticles } from '../actions/articles.actions';
import { ArticleDataService } from "../../services/article-data.service";
import { toUnicode } from 'punycode';

@Injectable({
    providedIn :'root'
})
export class ArticleEffects {

  constructor(
    private _actions: Actions,
    private _router: Router,
    private _articleData: ArticleDataService
  ) {}

  ArticleFetch$ = createEffect(() => {
        return this._actions.pipe(
           ofType(ArtilcesRequestType.GET_ARTICLES), 
           switchMap(() => {
              return this._articleData.getData().pipe(map((articles)=> {
                    return new SaveAllArticles(articles);
                  }), 
                     catchError((error) => {
                          return of(new ErrorInFetch({ error: error }));
                     })
                  )
           })
        )
  }, { dispatch: true })

  ArticleError$ = createEffect(() => {
            return this._actions.pipe(
              ofType(ArtilcesRequestType.ARTICLE_FETCH_ERROR),
              tap(({payload}) => {
                  if (payload['error']['status'] === 401) {
                    localStorage.removeItem('token');
                    this._router.navigate(['/login'])
                  }
              })
            )
  }, {dispatch: false})

}