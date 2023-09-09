function closestValidPoint(x, y, locations) {
    let minDistance = Infinity;
    let closestIndex = -1;

    for (let i = 0; i < locations.length; i++) {
        const [xi, yi] = locations[i];
        if (xi === x || yi === y) {
            const distance = Math.abs(xi - x) + Math.abs(yi - y);
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = i;
            }
        }
    }

    console.log(closestIndex);
    return closestIndex;
}

// Example usage
const x = 3, y = 4;
const locations = [[1, 2], [3, 1], [2, 4], [2, 3], [4, 4]];
const result = closestValidPoint(x, y, locations);
console.log(result); // Output: 2
