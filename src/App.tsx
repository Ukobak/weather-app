// src/App.tsx
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@fluentui/react';
import { lightTheme, darkTheme } from './styles/theme';
import Home from './pages/Home';

const queryClient = new QueryClient();

const App: React.FC = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
                <Home toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
            </ThemeProvider>
        </QueryClientProvider>
    );
};

export default App;
