const airports = ['PHX', 'BKK', 'OKC', "JFK", 'LAX', 'MEX', 'EZE', 'HEL', 'LOS', 'LAP', 'LIM'];

const routes = [['PHX', 'LAX'], ['PHX', 'JFK'], ['JFK', 'OKC'], ['JFK', 'HEL'], ['JFK', 'LOS'], ['MEX', 'LAX'], ['MEX', 'BKK'], ['MEX', 'LIM'], ['MEX', 'EZE'], ['LIM', 'BKK']];

let adjacencyList = new Map();

const addNode = airport => {
	adjacencyList.set(airport, []);
    //console.log(airport, adjacencyList.get(airport))
}

const addEdge = (origin, destination) => {
	//console.log('1', origin, adjacencyList.get(origin));
    adjacencyList.get(origin).push(destination);
    //console.log('2', origin, adjacencyList.get(origin));
    //console.log('3', destination, adjacencyList.get(destination));
    adjacencyList.get(destination).push(origin);
    //console.log('4', destination, adjacencyList.get(destination));
}

airports.forEach(airport => addNode(airport));

routes.forEach(route => addEdge(...route));

console.log(adjacencyList);

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
console.log('/n')

const dfs = (start, end, visited = new Set()) => {
    console.log(start);
    visited.add(start);
    const destinations = adjacencyList.get(start);
    for (let i = 0; i < destinations.length; i++) {
        if (destinations[i] === end) {
            console.log('Found it!');
            return;
        }
        if (!visited.has(destinations[i])) {
            dfs(destinations[i], end, visited)
        }
    }
}

console.log(dfs('PHX', 'BKK'));