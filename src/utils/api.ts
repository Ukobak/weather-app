
import axios from 'axios';
import { Weather } from '../types/types';

const API_KEY = '71cd1a099b8b4120962123827240209'

export const fetchWeather = async (location: string): Promise<Weather> => {
    const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json`, {
        params: {
            key: API_KEY,
            q: location,
            days: 7,
            lang: 'ru',
        },
    });
    return response.data;
};
