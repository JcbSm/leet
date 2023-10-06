int lengthOfLongestSubstring(char * s){
    int max = 0;
    int used[128] = {0};

    for (int i = 0, j = 0; s[i]; i++) {
        while (used[s[i]]) {
            used[s[j++]] = 0;
        }
        used[s[i]] = 1;
        max = (i - j + 1 > max) ? (i - j + 1) : max;
    }

    return max;
}