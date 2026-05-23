import { ITheme, IThemeContext } from "$types/common.types";
import React, { createContext, useMemo, useState } from "react";

export const AppThemeContext = createContext<IThemeContext | undefined>(undefined);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

    const [theme, setTheme] = useState<ITheme>('light');
    const changeTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
    const value = useMemo(() => ({ theme, changeTheme }), [theme]);

    return (
        <AppThemeContext.Provider value={value}>
            {children}
        </AppThemeContext.Provider>
    )
}

export default ThemeProvider;