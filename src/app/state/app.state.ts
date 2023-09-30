import { ActionReducerMap } from "@ngrx/store";
import { ItemState } from "../models/photos.state";
import { photosReducer } from "./reducers/photos.reducers";

export interface AppState{
  photos: ItemState;
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
  photos: photosReducer
}
