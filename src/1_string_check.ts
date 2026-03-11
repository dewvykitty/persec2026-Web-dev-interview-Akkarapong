export function checkString(value: string): boolean {
	const strArray = value.split('');
	const firstChar = strArray[0];
	const lastChar = strArray[strArray.length - 1];
	const insideChar = strArray.slice(1, -1)
	const stack: string[] = []
	if (firstChar === '(') {
		if (lastChar === ')') {
			if (strArray.length == 2) return true
			for (const str of insideChar) {
				if (str == '[' || str == '{') {
					stack.push(str)
				} else if (str == ']' || str == '}') {
					if (stack.length == 0) return false
					if (str == ']') {
						const last = stack.pop()
						if (last != '[') {
							return false
						}
					} else if (str == '}') {
						const last = stack.pop()
						if (last != '{') {
							return false
						}
					}
				}
				return true;
			}
		}
	}
	return false;
}