import React, { createContext, useContext } from "react";
import RootStore from "../stores/rootStore";

const StoreContext = createContext<RootStore | undefined>(undefined);

interface StoreProviderProps {
    children: React.ReactNode;
}

const StoreProvider = ({ children }: StoreProviderProps) => {
    const rootStore = new RootStore();

    return (
        <StoreContext.Provider value={rootStore}>
            {children}
        </StoreContext.Provider>
    );
};

const useStore = (): RootStore => {
    const store = useContext(StoreContext);
    if (!store) {
        throw new Error("useStore must be used within a StoreProvider.");
    }
    return store;
};

export { StoreProvider, useStore };