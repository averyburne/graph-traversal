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
