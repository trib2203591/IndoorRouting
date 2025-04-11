export function calculatePolygonMidpoint(flatCoordinates, stride = 2) {
    if (!flatCoordinates || flatCoordinates.length < stride) {
        throw new Error('Invalid flat coordinates array.');
    }

    let sumX = 0, sumY = 0;
    let count = 0;

    // Loop through the coordinates, summing x and y values
    for (let i = 0; i < flatCoordinates.length; i += stride) {
        sumX += flatCoordinates[i];     // x-coordinate
        sumY += flatCoordinates[i + 1]; // y-coordinate
        count++;
    }

    // Calculate averages for x and y
    const midX = sumX / count;
    const midY = sumY / count;

    return [midX, midY];
}
