import { ThemeProvider } from "./ThemeContext";
import { CoursesProvider } from "./CoursesContext";


export function AppProviders({childern}){
    return(
        <CoursesProvider>
            <ThemeProvider>
                {childern}
            </ThemeProvider>
        </CoursesProvider>
    )
}