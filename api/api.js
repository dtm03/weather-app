import axios from "axios";

const forecastEndpoint = params => `https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`;
const locationsEndpoint = params => `https://api.weatherapi.com/v1/search.json?key=${process.env.API_KEY}&q=${params.cityName}`;

const apiCall = async (endpoint)=> {
    try {
        const response = await axios.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

export const fetchWeatherForecast = params => {
    return apiCall(forecastEndpoint(params));
}

export const fetchLocations = params => {
    return apiCall(locationsEndpoint(params));
}
