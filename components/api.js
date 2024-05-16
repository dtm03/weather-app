import axios from 'axios';

const BASE_URL = 'https://api.open-meteo.com/v1';
const CURRENT = 'temperature_2m,relative_humidity_2m,wind_speed_10m';
const DAILY = 'temperature_2m_max,sunrise';
const TIMEZONE = 'Europe%2FBerlin';

export const fetchWeather = async (latitude, longitude) => {
    try {
        const response = await axios.get(`${BASE_URL}/forecast?latitude=${latitude}&longitude=${longitude}&${CURRENT}&${DAILY}&timezone=${TIMEZONE}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};
