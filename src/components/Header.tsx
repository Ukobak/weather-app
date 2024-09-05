import React from 'react';
import { Text } from '@fluentui/react';

interface ThemeToggleProps {
    isDarkTheme: boolean;
}
const Header: React.FC<ThemeToggleProps> = ({isDarkTheme}) => {
    return (
        <Text variant="xxLarge"
              styles={{
                  root: {
                      marginBottom: 20,
                      color: isDarkTheme ? '#ffffff' : '#000000', // Устанавливаем цвет текста в зависимости от темы
                  },
              }}
        >
            Прогноз погоды
        </Text>
    );
};

export default Header;