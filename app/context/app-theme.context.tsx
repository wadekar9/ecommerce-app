import { EStorageKeys } from "$constants/storage.constants";
import { ITheme, IThemeContext } from "$types/common.types";
import { Storage } from "$utils/storage";
import React, { createContext, useEffect, useMemo, useState } from "react";

export const AppThemeContext = createContext<IThemeContext | undefined>(undefined);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

    const [theme, setTheme] = useState<ITheme>('light');
    const changeTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        Storage.set(EStorageKeys.APP_THEME, newTheme);
        setTheme(newTheme);
    }
    const value = useMemo(() => ({ theme, changeTheme }), [theme]);

    useEffect(() => {
        (async () => {
            const storageTheme = await Storage.getString(EStorageKeys.APP_THEME);
            setTheme(storageTheme as ITheme || 'light');
        })();
    }, []);

    return (
        <AppThemeContext.Provider value={value}>
            {children}
        </AppThemeContext.Provider>
    )
}

export default ThemeProvider;