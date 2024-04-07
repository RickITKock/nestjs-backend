/**
 * Construct an array that that creates empty slots of objects for items not found in the secondary array.
 * It works by using a common unique property that the primary and secondary array share and uses it to check
 * if the primary array contains any items with this property's value. If it is not found, a new fallback
 * object is created. Finally, the method will return the original primary array with the fallback object
 * concatenated.
 *
 * @param prop A property that the primary and secondary array.
 * @param primary Primary array. It is an array of object where you want to concat fallback objects if needed.
 * @param secondary Secondary array. It is the array you want to look for items not contained in primary aray.
 * @param fallback An object of the same type as the primary array elements.
 * @returns The primary array with fallback objects concatenated, if any.
 */

export function fillEmptySlots<P, S>(
  prop: string,
  primary: P[],
  secondary: S[],
  fallback: P,
): P[] {
  if (primary.length < 1 || secondary.length < 1) return primary;
  if (
    typeof primary[0][prop] !== typeof secondary[0][prop] ||
    typeof primary[0][prop] === 'object'
  ) {
    return primary;
  }

  const fallBacks: P[] = [];

  secondary.filter(function (secondaryItem) {
    const noMatchFound = primary.some(
      (primaryItem: P) => primaryItem[prop] !== secondaryItem[prop],
    );

    if (noMatchFound) {
      const newFallback = { ...fallback, [prop]: secondaryItem[prop] };
      fallBacks.push(newFallback);
    }
  });

  return primary.concat(fallBacks);
}
