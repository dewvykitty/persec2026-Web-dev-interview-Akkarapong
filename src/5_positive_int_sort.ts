export function positiveIntSort(value: number): number {
    if (value < 0) {
        throw new Error('Value must be a positive integer');
    }
    const valueString = value.toString();
    const valueArray = valueString.split('');
    const valueArraySorted = valueArray.sort((a, b) => parseInt(b) - parseInt(a));
    const valueStringSorted = valueArraySorted.join('');
    return parseInt(valueStringSorted);
}