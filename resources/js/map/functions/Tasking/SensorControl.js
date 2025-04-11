
const fetchWithToken = async (url) => {
    try {

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
};

const fetchWithBody = async (url,data) => {
    try {

        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

      return response.json();
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
};

export const getSensorState = async (actuator_id) => {

    const state = `${import.meta.env.VITE_API_URL}/api/tasks/${actuator_id}?$token=${import.meta.env.VITE_API_URL}`;
    let response;
    try {
        response = await fetchWithToken(state);
    } catch (e) {
        console.error(e);
        return null;
    }
    console.log(response);
    return response;
}

export const convertSensorState = async (actuator_id, thing_id, checked) => {

    const url = `${import.meta.env.VITE_API_URL}/api/tasks`;

    let response;

    let data = {
        "thing_id": thing_id,
        "taskingParameters": checked ? 0 : -1,
        "actuator_id": actuator_id,
        "token": import.meta.env.VITE_CUSC_API_TOKEN
    }

    try {
        response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });


    } catch (e) {
        console.error(e);
        return null;
    }
    console.log(response);
    return response;
}
