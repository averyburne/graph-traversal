const adjacencyList = require('./adjacencyList')

const dfs = (start, end, visited = new Set()) => {
    console.log(start);
    visited.add(start);
    const destinations = adjacencyList.adjacencyList.get(start);
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

// console.log(dfs('PHX', 'BKK'));


const IterativeDfs = (start, end, visited = new Set()) => {
    const stack = [start];
    let count = 0;
    
    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);

        if (current === end) {
            console.log('Found it!');
            break;
        }

        if (count > 10) {
            break;
        }

        for (let neighbor of adjacencyList.adjacencyList.get(current)) {
            if (!visited.has(neighbor)) {
                stack.push(neighbor)
            } else {
                visited.add(neighbor)
            }
            // if (neighbor === end) {
            //     console.log("Found it!")
            // }
        }
        count++;
    }
}

console.log(adjacencyList.adjacencyList)
console.log(IterativeDfs('PHX', 'BKK'));
