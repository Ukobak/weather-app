import React from 'react';
import { ForecastDay } from '../types/types';
import { Card, Text, makeStyles, CardHeader } from '@fluentui/react-components';

interface WeatherCardProps {
    forecast: ForecastDay;
}

const formatDateToWords = (dateString: string) => {
    return new Intl.DateTimeFormat('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(new Date(dateString));
};

const useStyles = makeStyles({
    card: {
        margin: '1rem',
        padding: '1rem',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: 'transparent',
    },
    date: {
        textAlign: 'center',
        fontSize: '1.30rem',
    },
    temperature: {
        fontSize: '1.25rem',
    },
    condition: {
        fontSize: '1rem',
    },
    icon: {
        width: '5rem',
        height: '5rem',
    },
    temperatureContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        alignItems: 'center', // Центрируем элементы
    },
});

const WeatherCard: React.FC<WeatherCardProps> = ({ forecast }) => {
    const styles = useStyles();

    return (
        <Card className={styles.card}>
            <div className={styles.date}>
                <Text className={styles.date}>Дата: {formatDateToWords(forecast.date)}</Text>
            </div>

            <div className={styles.temperatureContainer}>
                <Text className={styles.temperature}>
                    Максимальная температура: {forecast.day.maxtemp_c}°C
                </Text>
                <Text className={styles.temperature}>
                    Минимальная температура: {forecast.day.mintemp_c}°C
                </Text>
                <img
                    className={styles.icon}
                    src={forecast.day.condition.icon}
                    alt={forecast.day.condition.text}
                    loading="lazy"
                />
                <Text className={styles.condition}>{forecast.day.condition.text}</Text>
            </div>
        </Card>
    );
};

export default WeatherCard;
