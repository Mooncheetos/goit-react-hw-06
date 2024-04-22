import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from "redux-persist";
import {configureStore} from "@reduxjs/toolkit";
import filterReducer from "./filtersSlice";
import contactsReducer from "./contactsSlice";

const contactsPersistConfig = {
    key: "contacts",
    storage,    
    whitelist: ["items"],
};

export const store = configureStore({
    reducer: {
        contacts: persistReducer(contactsPersistConfig, contactsReducer),
        filters: filterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});
export const persistor = persistStore(store);