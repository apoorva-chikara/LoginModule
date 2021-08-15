
/**
 * Angular core imports
 */
import { Injectable, OnInit } from '@angular/core';

/**
 * Store  and it's state imports
 */
import { Store } from "@ngrx/store";
import { AppState } from 'src/app/globalStore/app.state';

/**
 * User custome imports
 */
import { EntryPointModule } from "../../entry-point.module";

@Injectable({
  providedIn: EntryPointModule
})
export class UpdateStoreService {

  constructor(
    private _store: Store
  ) { }


  updateStore(...args) {
  }

}
