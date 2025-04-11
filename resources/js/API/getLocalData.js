

export const getLocalData= async (fromDate, toDate, sensorId) => {
    try {
        const params = new URLSearchParams({ fromDate, toDate });
        if (sensorId) params.append('sensorId', sensorId);
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/sensor-data?${params.toString()}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const localAirData = await response.json();

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        return localAirData;
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to fetch sensor data. Please try again.');
    }
}
