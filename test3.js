function findLargestPalindrome(string, k) {
    let chars = string.split('');
    let left = 0;
    let right = chars.length - 1;

    while (left < right) {
        if (chars[left] !== chars[right]) {
            // Substitusi dengan karakter maksimum dari keduanya
            chars[left] = chars[right] = String.fromCharCode(Math.max(chars[left].charCodeAt(0), chars[right].charCodeAt(0)));
            k--; // Kurangi k karena telah melakukan satu substitusi

            // Jika k sudah habis, hentikan proses
            if (k < 0) {
                return -1;
            }
        }
        left++;
        right--;
    }

    // Ubah ke bentuk palindrom
    left = 0;
    right = chars.length - 1;
    while (left < right) {
        if (chars[left] !== chars[right]) {
            return -1; // Jika tidak bisa dibuat palindrom, kembalikan -1
        }
        left++;
        right--;
    }

    return chars.join('');
}

// Contoh penggunaan:
console.log(findLargestPalindrome("12321", 1));
console.log(findLargestPalindrome("45654", 2));
console.log(findLargestPalindrome("765467", 1));
console.log(findLargestPalindrome("812128", 2));
