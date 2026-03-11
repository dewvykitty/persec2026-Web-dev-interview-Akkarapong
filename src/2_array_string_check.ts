export function checkArrayString(value: string[]): string[] {
    return value.sort((a, b) => {
        if (a.charAt(0) !== b.charAt(0)) {
            return a.charAt(0).localeCompare(b.charAt(0));
        }
        const aNumber = a.match(/\d+/);
        const bNumber = b.match(/\d+/);
        if (aNumber && bNumber) {
            return parseInt(aNumber[0]) - parseInt(bNumber[0]);
        }
        return 0;
    });
}