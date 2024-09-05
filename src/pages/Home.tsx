import React, { useState } from 'react';
import { TextField, Spinner, PrimaryButton } from '@fluentui/react';
import useWeather from '../hooks/useWeather';
import WeatherList from '../components/WeatherList';
import ThemeToggle from '../components/ThemeToggle';
import Header from '../components/Header';

interface HomeProps {
    toggleTheme: () => void;
    isDarkTheme: boolean;
}

const Home: React.FC<HomeProps> = ({ toggleTheme, isDarkTheme }) => {
    const [location, setLocation] = useState('');
    const { data, refetch, error, isLoading } = useWeather(location);

    const handleSearch = () => {
        if (location) {
            refetch(); // Запускаем запрос вручную
        }
    };

    return (
        <div style={{
            backgroundColor: isDarkTheme ? '#3e3f48' : '#ffffff',
            color: isDarkTheme ? '#ffffff' : '#3e3f48',
            minHeight: '100vh',
            padding: '20px',
        }}>
            <Header isDarkTheme={isDarkTheme} />
            <ThemeToggle isDarkTheme={isDarkTheme} onToggle={toggleTheme} />
            <TextField
                styles={{
                    root: {
                        width: '20rem',
                    },
                }}
                value={location}
                onChange={(event) => {
                    const target = event.target as HTMLInputElement; // Приведение типа
                    setLocation(target.value);
                }}
                placeholder={'Введите город'}
            />
            <PrimaryButton style={{ margin: '1rem 0' }} onClick={handleSearch}>Поиск</PrimaryButton>
            {isLoading && <Spinner label="Загрузка..." />}
            {error && <p>Ошибка: {error.message}</p>}
            {data && <WeatherList forecast={data.forecast.forecastday} />}
        </div>
    );
};

export default Home;
