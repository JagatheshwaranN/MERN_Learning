import { configureStore } from "@reduxjs/toolkit";
import {counterRecuder} from '../features/counter/counter-slice';

export const store = configureStore({
  reducer: {
    counter: counterRecuder
  }
});
