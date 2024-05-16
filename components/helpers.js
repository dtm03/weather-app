export const transformWeatherData = (data) => {
    return {
        latitude: data.latitude,
        longitude: data.longitude,
        generationtime_ms: data.generationtime_ms,
        utc_offset_seconds: data.utc_offset_seconds,
        timezone: data.timezone,
        timezone_abbreviation: data.timezone_abbreviation,
        elevation: data.elevation,
        current_units: {
            time: 'iso8601',
            interval: 'seconds',
            temperature_2m: '°C',
            relative_humidity_2m: '%',
            wind_speed_10m: 'km/h',
        },
        current: {
            time: '2024-05-16T07:30',
            interval: 900,
            temperature_2m: 12.4,
            relative_humidity_2m: 98,
            wind_speed_10m: 5.9,
        },
        daily: {
            sunrise: data.daily.sunrise,
        },
    };
};