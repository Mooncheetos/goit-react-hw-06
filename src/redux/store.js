import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from "redux-persist";
import {configureStore} from "@reduxjs/toolkit";
import filterReducer from "./filtersSlice";
import contactsReducer from "./contactsSlice";

const contactsPersistConfig = {
    key: "contacts",
    storage,
    blacklist: ["filter"],
    whitelist: ["items"],
};

export const persistor = persistStore(store);
export const store = configureStore({
    reducer: {
        contacts: persistReducer(contactsPersistConfig, contactsReducer),
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});