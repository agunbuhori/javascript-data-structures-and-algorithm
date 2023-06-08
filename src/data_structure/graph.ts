class Graph<T> {
  private vertices: Map<T, T[]>;

  constructor() {
    this.vertices = new Map();
  }

  addVertex(vertex: T): void {
    this.vertices.set(vertex, []);
  }

  addEdge(from: T, to: T): void {
    if (!this.vertices.has(from) || !this.vertices.has(to)) {
      throw new Error("Vertex does not exist in the graph.");
    }

    const edges = this.vertices.get(from);
    if (edges) {
      edges.push(to);
    }
  }

  getNeighbors(vertex: T): T[] {
    if (!this.vertices.has(vertex)) {
      throw new Error("Vertex does not exist in the graph.");
    }

    return this.vertices.get(vertex) || [];
  }

  getVertices(): T[] {
    return Array.from(this.vertices.keys());
  }
}
