export class FilterMap<K, T> extends Map {
  /**
   * Filter the map according to the provided conditions.
   *
   * @param conditions An array of all conditions that each element in the map needs to addhere to.
   * @returns The map, filtered or not.
   */
  public filter(conditions: ((data: T) => boolean)[]): Map<K, T> {
    if (conditions.length < 1) return this;
    for (const [key, item] of this) {
      if (!conditions.every((condition) => condition(item))) {
        this.delete(key);
      }
    }
    return this;
  }
}
