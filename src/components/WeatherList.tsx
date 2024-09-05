import React from 'react';
import { ForecastDay } from '../types/types';
import WeatherCard from './WeatherCard';
import { Stack } from '@fluentui/react';

interface WeatherListProps {
    forecast: ForecastDay[];
}

const WeatherList: React.FC<WeatherListProps> = ({ forecast }) => {
    return (
        <Stack
            horizontal
            tokens={{ childrenGap: 20 }}
        >
            {forecast.map((day) => (
                <WeatherCard key={day.date} forecast={day} />
            ))}
        </Stack>
    );
};

export default WeatherList;