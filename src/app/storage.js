import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import savedSlice from '../features/savedSlice';
// import movieReducer from '../features/saveSlice'; 

export default configureStore({
  reducer: {
    user: userReducer,
    saved: savedSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});