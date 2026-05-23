export type ITheme = 'light' | 'dark';

export type IThemeContext = {
    theme: ITheme;
    changeTheme: (theme: ITheme) => void;
}