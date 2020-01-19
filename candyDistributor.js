const assert = require('assert');

const candyDistributor = (n, k) => {
   const result = {};
   let candies = n;
   let round = 0;

   // Loop until candies are gone
   for (let i = 0; candies > 0; i++) {
      // Rotate child you're distributing candies to
      const child = i % k;
      // Number of candies to give
      let numCandies = round === 0 ? i + 1 : i + 1 + k;

      //If almost out, only give remaining candies
      if (numCandies > candies) {
         numCandies = candies;
      }

      // Add candies to child's total
      result[child] = result[child] ? result[child] + numCandies : numCandies;

      // Subtract from candy total
      candies -= numCandies;

      // Keep track number of rounds
      if (child === k - 1) {
         round++;
      }
   }

   // Return result
   return Object.values(result);
};

try {
   assert.deepEqual(candyDistributor(7, 4), [ 1, 2, 3, 1 ]);
   assert.deepEqual(candyDistributor(10, 3), [ 5, 2, 3 ]);
   console.log('Tests succeeded');
} catch (e) {
   console.log('Tests failed');
   console.log('Expected', e.expected);
   console.log('Actual', e.actual);
}
