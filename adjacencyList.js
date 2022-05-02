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
        const air
    }
}