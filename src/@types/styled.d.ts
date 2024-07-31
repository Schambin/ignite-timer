import "styled-components";
import { defaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
    // allow theme to be used as a prop
    export interface DefaultTheme extends ThemeType {}
}