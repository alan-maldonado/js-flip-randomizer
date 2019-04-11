// Returns true/false
const flip = () => {
  return Math.random() >= 0.5;
};

const randomNumber = n => {
  // Steps
  // 1. Create from upper number (n) a binary representation `bin(n)`
  // 2. Iterate over bin(n) from left to right
  // 3. We need a safe to Flip flag so we can handle random number not be greater than n.
  // 4. Apply flip function to create a binary random array
  // 5. Finally convert that random array of bits to decimal

  // Top number is 1'000,000
  if (n > 1000000) {
    throw `Top can't be more than 1 million`;
  }

  let safeToFlip = false;

  // Convert top to binary
  const topBinaryArray = n
    .toString(2)
    .split('')
    .map(n => parseInt(n));
  const randomBinaryArray = [];

  topBinaryArray.forEach(binary => {
    let flipResult = flip() ? 1 : 0;

    // its safe to flip when we found the first 1 and we get 0, otherwise
    // we can't get a random 1 when we are iterating 0
    if (!safeToFlip && binary && !flipResult) {
      safeToFlip = true;
      randomBinaryArray.push(flipResult);
    } else if (!safeToFlip && !binary && flipResult) {
      randomBinaryArray.push(0);
    } else {
      // safe to flip
      randomBinaryArray.push(flipResult);
    }
  });

  // Convert randomBinaryArray to decimal number
  const result = parseInt(randomBinaryArray.join(''), 2); // From Base 2

  console.log(`From top ${n} you get ${result}`);
  return result;
};

module.exports = randomNumber;

randomNumber(500); // returns 123
randomNumber(1); // returns 0
randomNumber(500); // returns 466
randomNumber(1000001); // throw error
