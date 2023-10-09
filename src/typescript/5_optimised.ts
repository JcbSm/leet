function longestPalindrome(s: string): string {

    if (s.length === 0) {
        return "";
    }
  
    // Preprocess the string to handle even-length palindromes
    let str = "#";
    
    // Process string to work with even-length palindromes
    for (let i = 0; i < s.length; i++) {
        str += s[i] + "#";
    }
  
    // Store longests
    let maxLen = 0, maxCen = 0;
    let maxL = 0, maxR = 0;
    let ll: number, rr: number, len: number;    
  
    // Iterate through string
    for (let i = 1; i < str.length - 1; i++) {
  
        // Set l/r counters to middle, length to 0
        ll = i; rr = i; len = 0;
  
        // Attempt to expand until palindrome fails
        while (ll >= 0 && rr < str.length && str[ll] === str[rr]) {
            len++;
            rr++;
            ll--;
        }
  
        // Decrement bc bad code
        ll++;
        rr--;
        len--;
  
        // Replace old if not longer
        if (len > maxLen) {
            maxLen = len;
            maxR = rr;
            maxL = ll;
        }
    }
  
    // Form answer
    let ans = "";
  
    // Get new string
    for (let i = maxL; i <= maxR; i++) {
        if (str[i] != "#") ans += str[i];
    }
   
    return ans;
  }