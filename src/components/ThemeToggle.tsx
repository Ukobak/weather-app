// src/components/ThemeToggle.tsx
import React from 'react';
import { Toggle } from '@fluentui/react';

interface ThemeToggleProps {
    isDarkTheme: boolean;
    onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkTheme, onToggle }) => {
    return (
        <Toggle
            label={isDarkTheme ? 'Темная тема' : 'Светлая тема'}
            checked={isDarkTheme}
            onChange={onToggle}
            styles={{
                label: {
                    color: isDarkTheme ? '#ffffff' : '#000000', // Устанавливаем цвет текста в зависимости от темы
                },
                root: {
                    marginBottom: 20,
                },
            }}
        />
    );
};

export default ThemeToggle;
