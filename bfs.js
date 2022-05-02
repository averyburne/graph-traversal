const bfs = (start, end) => {
    const queue = [start];
    const visited = new Set();

    while (queue.length > 0) {
        const airport = queue.shift();
        const destinations = adjacencyList.get(airport);
        for (let i = 0; i < destinations.length; i++) {
            if (destinations[i] === end) {
                console.log('Found it!');
            }
            if (!visited.has(destinations[i])) {
                visited.add(destinations[i]);
                queue.push(destinations[i]);
                console.log(destinations[i])
            }
        }
    }
}

console.log(bfs('PHX', 'BKK'));
