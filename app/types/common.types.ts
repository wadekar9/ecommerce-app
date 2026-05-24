export type ITheme = 'light' | 'dark';

export type IThemeContext = {
    theme: ITheme;
    changeTheme: () => void;
}

export type ISummaryModalRef = {
    open: () => void;
    close: () => void;
}