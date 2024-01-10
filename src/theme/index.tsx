import { useMemo } from 'react';
// @mui
import { CssBaseline, ThemeOptions } from '@mui/material';
import {
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles';

import customShadows from './customShadows';
import GlobalStyles from './globalStyles';
import componentsOverride from './overrides';
import palette from './palette';
import shadows from './shadows';
import typography from './typography';

export default function ThemeProvider({ children }) {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 6 },
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
    }),
    [],
  );

  const theme = createTheme(themeOptions as ThemeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
