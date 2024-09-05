export interface Weather {
    location: {
        name: string;
        region: string;
        country: string;
        lat: number;
        lon: number;
        tz_id: string;
        localtime: string;
    };
    current: {
        temp_c: number;
        condition: {
            text: string;
            icon: string;
        };
    };
    forecast: {
        forecastday: ForecastDay[];
    };
}

export interface ForecastDay {
    date: string;
    day: {
        maxtemp_c: number;
        mintemp_c: number;
        condition: {
            text: string;
            icon: string;
        };
    };
}