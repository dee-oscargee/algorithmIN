function dijkstra(graph, start) {
    // Initialize distances and previous vertices
    const distances = {};
    const previous = {};
    const queue = [];

    // Set initial distances to Infinity, except for the start vertex
    for (let vertex in graph) {
        distances[vertex] = Infinity;
        previous[vertex] = null;
    }
    distances[start] = 0;
    
    // Add start vertex to the queue
    queue.push([start, 0]);

    // Process the queue
    while (queue.length > 0) {
        // Sort queue by distance (priority queue functionality)
        queue.sort((a, b) => a[1] - b[1]);
        const [currentVertex, currentDistance] = queue.shift();
        
        // Visit each neighbor of the current vertex
        for (let neighbor in graph[currentVertex]) {
            const weight = graph[currentVertex][neighbor];
            const distance = currentDistance + weight;
            
            // If a shorter path is found
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                previous[neighbor] = currentVertex;
                queue.push([neighbor, distance]);
            }
        }
    }

    return distances;
}

// Example graph
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

// Run Dijkstra's algorithm
const startVertex = 'A';
const shortestPaths = dijkstra(graph, startVertex);
console.log(shortestPaths); // Output: { A: 0, B: 4, C: 2, D: 5 }
