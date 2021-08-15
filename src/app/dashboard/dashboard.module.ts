/**
 * Angular imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
/**
 * Store imports
 */
import { Store, StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducers } from "./store/dashboard.state";
import { ArticleEffects } from "./store/effects/articles.effects";
/**
 * User custom imports
 */
import { ArticlesComponent } from './articles/articles.component';


const routes: Routes = [
   {
     path : '' , component: ArticlesComponent
   }
]

@NgModule({
  declarations: [ArticlesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('Dashboard',reducers),
    EffectsModule.forFeature([ArticleEffects])
  ]
})
export class DashboardModule { }  
