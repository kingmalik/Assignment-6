/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function (s, t) {
	
	let stMap = new Map();
	let tsMap = new Map();
	
	for (let i = 0; i < s.length; i++) {
		let sChar = s[i];
		let tChar = t[i];

		if (stMap[sChar] == null && tsMap[tChar] == null) {
			stMap[sChar] = tChar;
			tsMap[tChar] = sChar;
		} else if (!(stMap[sChar] == tChar && tsMap[tChar] == sChar)) {
			return false;
		}
	}

	return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));