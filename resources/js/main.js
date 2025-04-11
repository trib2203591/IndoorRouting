import { initialize } from './map/init/initialize'



const start = async () => {
    await initialize();
    console.log('Map initialized');
    console.log(import.meta.env.VITE_API_URL);
}

start();




