function firstUniqueCharacter(str) {
	let map = new Map();

	for (let i = 0; i < str.length; i++) {
		if (map[str[i]]) {
			map[str[i]] += 1;
		} else {
			map[str[i]] = 1;
		}
	}

	let unique = null;
	let foundUnique = false;
	for (let i in map) {
		if (map[i] == 1) {
			unique = i;
			foundUnique = true;
			break;
		}
	}

	if (foundUnique == false) return -1;
	return str.indexOf(unique);
}

console.log(firstUniqueCharacter("leetcode"));
console.log(firstUniqueCharacter("loveleetcode"));
console.log(firstUniqueCharacter("aabb"));
console.log(firstUniqueCharacter("dddccdbba"));