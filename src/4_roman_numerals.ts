const romanNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

export function convertRomanNumeralsToNumber(value: string): number {
    let result = 0;
    const romanNumeralsArray = value.split('') as (keyof typeof romanNumerals)[];
    for (let i = 0; i < romanNumeralsArray.length; i++) {
        const current = romanNumeralsArray[i];
        const next = romanNumeralsArray[i + 1];
        if (!current) continue;
        if (next && romanNumerals[current] < romanNumerals[next]) {
            result -= romanNumerals[current];
        } else {
            result += romanNumerals[current];
        }
    }
    return result;
}

export function convertNumberToRomanNumerals(value: number): string {
    let result: string[] = [];
    while (value > 0) {
        if (value >= 900) {
            if (value < 1000) {
                result.push('CM');
                value -= 900;
            } else {
                result.push('M');
                value -= 1000;
            }
        } else if (value >= 400) {
            if (value < 500) {
                result.push('CD');
                value -= 400;
            } else {
                result.push('D');
                value -= 500;
            }
        } else if (value >= 90) {
            if (value < 100) {
                result.push('XC');
                value -= 90;
            } else {
                result.push('C');
                value -= 100;
            }
        } else if (value >= 40) {
            if (value < 50) {
                result.push('XL');
                value -= 40;
            } else {
                result.push('L');
                value -= 50;
            }
        } else if (value >= 9) {
            if (value < 10) {
                result.push('IX');
                value -= 9;
            } else {
                result.push('X');
                value -= 10;
            }
        } else if (value >= 4) {
            if (value < 5) {
                result.push('IV');
                value -= 4;
            } else {
                result.push('V');
                value -= 5;
            }
        } else {
            result.push('I');
            value -= 1;
        }
    }
    return result.join('');
}