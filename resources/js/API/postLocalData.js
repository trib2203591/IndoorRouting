export const postLocalData = async (data) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/sensor-data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": data.id,
                "sensor_id": data.sensor_id,
                "data": data.data,
                "battery": data.battery,
                "record_time": data.record_time,
                "result_time": data.result_time,
                "valid_time": data.valid_time
            })
        });

        console.log(data);
        console.log(response);
    } catch (error) {
        console.error('Error syncing data:', error);
    }

}
