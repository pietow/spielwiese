const gcd = (n, m) => {
    if (!m) return n
    return gcd(m, n % m)
}
console.log(gcd(18, 9))

const gcdWhile = (n, m) => {
    while (!!m) {
        ;[n, m] = [m, n % m]
    }
    return n
}

console.log(gcdWhile(18, 9))

console.log(!Infinity)
