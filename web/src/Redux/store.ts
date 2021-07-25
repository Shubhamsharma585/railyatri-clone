import { configureStore } from '@reduxjs/toolkit'
import busreducer from './Buses/busreducer';

const store = configureStore({
    reducer: {
        bus: busreducer
    },
    devTools: (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;