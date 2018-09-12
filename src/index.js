// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency <= 0) return {};
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    
    const coins = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1
    }
    let result = {};
    let rest = currency;

    Object.keys(coins).forEach((coin) => {
        if (rest === 0) return false;
        const coinsCount = Math.floor(rest / coins[coin]);
        rest -= coins[coin] * coinsCount;
        if (coinsCount != 0) {
            result[coin] = coinsCount;
        }
    });

    return result;
}
