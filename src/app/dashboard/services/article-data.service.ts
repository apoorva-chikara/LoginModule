/**
 * Angular core imports
 */
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

/**
 * User imports
 */
import { DashboardModule } from "../dashboard.module";
import { URLs } from 'src/assets/constants/app.url';

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {

  constructor(
    private httpClient: HttpClient
  ) { 
  }

  getData () {
    const URL = `${URLs.baseURL}/article`
    return this.httpClient.get(URL);
  }
}
