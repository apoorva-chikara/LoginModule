/**
 * Angular core imports
 */
import { Component, OnInit } from '@angular/core';

/**
 * Store imports
 */
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import { LogOut } from 'src/app/globalStore/actions/loginSignup.action';
import { GetAllArticles } from '../store/actions/articles.actions';

/**
 * User custom imports
 */
import { selectArticles } from "../store/dashboard.state";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  public getArticles$: Observable<any>;
  public spinner$ : Observable<any>;

  constructor(
    private _store: Store
  ) { 
     this._store.dispatch(new GetAllArticles());
     this.getArticles$ = this._store.select(selectArticles);
  }

  ngOnInit(): void {
  }

  logout() {
      this._store.dispatch(new LogOut());
  }

  messagePopup() {
    
  }
}
