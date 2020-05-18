import { combineReducers } from 'redux';
import ShelfReducer from '../components/Shelf/store/reducer';
import { reducer as FilterReducer } from '../components/Shelf/Filter/store';
import { reducer as SortReducer } from '../components/Shelf/Sort/store';

export default combineReducers({
  shelf: ShelfReducer,
  filters: FilterReducer,
  sort: SortReducer,
});
