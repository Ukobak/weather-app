import { useQuery } from 'react-query';
import { fetchWeather } from '../utils/api';
import { Weather } from '../types/types';

const useWeather = (location: string) => {
    return useQuery<Weather, Error>(['weather', location], () => fetchWeather(location), {
        enabled: false,
    });
};

export default useWeather;
