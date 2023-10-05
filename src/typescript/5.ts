function longestPalindrome(s: string): string {
    return getSubstrings(s).filter(s => isPalindromic(s)).sort((a, b) => b.length - a.length)[0];
};

function getSubstrings(s: string): string[] {

    let list: string[] = [];

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            list.push(s.substring(i, j));
        }
    }

    return list;
}

function isPalindromic(s: string) {
    
    for (let i = 0; i < Math.floor(s.length/2); i++) {
        
        if (s.charAt(i) !== s.charAt(s.length - i - 1))
            return false;
    }

    return true;
}
