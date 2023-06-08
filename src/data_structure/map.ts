class Map<K, V> {
  private keys: K[];
  private values: V[];

  constructor() {
    this.keys = [];
    this.values = [];
  }

  get size(): number {
    return this.keys.length;
  }

  set(key: K, value: V): void {
    const index = this.keys.indexOf(key);
    if (index !== -1) {
      // Key already exists, update the value
      this.values[index] = value;
    } else {
      // Key doesn't exist, add a new key-value pair
      this.keys.push(key);
      this.values.push(value);
    }
  }

  get(key: K): V | undefined {
    const index = this.keys.indexOf(key);
    if (index !== -1) {
      return this.values[index];
    }
    return undefined;
  }

  has(key: K): boolean {
    return this.keys.indexOf(key) !== -1;
  }

  delete(key: K): void {
    const index = this.keys.indexOf(key);
    if (index !== -1) {
      this.keys.splice(index, 1);
      this.values.splice(index, 1);
    }
  }

  clear(): void {
    this.keys = [];
    this.values = [];
  }

  entries(): [K, V][] {
    return this.keys.map((key, index) => [key, this.values[index]]);
  }

  keys(): K[] {
    return this.keys;
  }

  values(): V[] {
    return this.values;
  }
}
