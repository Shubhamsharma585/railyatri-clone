import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Auth/authReducer';
import busreducer from './Buses/busreducer';

const store = configureStore({
    reducer: {
        bus: busreducer,
        auth: authReducer
    },
    devTools: (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;