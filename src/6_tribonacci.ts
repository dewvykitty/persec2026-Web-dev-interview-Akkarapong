export function tribonacci(value: number[], nni: number): number[] {
    const valueLength = value.length;
    if (valueLength > 3) {
        throw new Error('Value must be an array of 3 numbers');
    }
    const arrayValue: number[] = []
    let result: number[] = [];
    if (valueLength == 0) {
        arrayValue.push(0,0,0);
    } else if (valueLength == 1) {
        arrayValue.push(0,0,value[0]!);
    } else if (valueLength == 2) {
        arrayValue.push(0,value[0]!,value[1]!);
    } else {
        arrayValue.push(value[0]!,value[1]!,value[2]!);
    }

    if (nni < 0) {
        throw new Error('N must be a positive integer');
    } else if (nni == 0) {
        return [];
    } else if (nni == 1) {
        return [arrayValue[0]!];
    } else if (nni == 2) {
        return [arrayValue[0]!,arrayValue[1]!];
    } else if (nni == 3) {
        return [arrayValue[0]!,arrayValue[1]!,arrayValue[2]!];
    }
    result.push(arrayValue[0]!,arrayValue[1]!,arrayValue[2]!);
    for (let i = 3; i < nni; i++) {
        result.push(result[i - 1]! + result[i - 2]! + result[i - 3]!);
    }
    return result;
}