//main solution

/**
 * For as long as the population is less than the target population, increase the population by the
 * percentage plus the augmentation and increment the years by one.
 * @param p0 - the population to start with
 * @param percent - percentage in decimal form (for example 2 for 2%)
 * @param aug - per year increase in population
 * @param p - the population to surpass
 * @returns The number of years it will take for the population to reach the target population.
 */
function nbYear (p0, percent, aug, p) {
  for (var years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + p0 * percent / 100 + aug);
  }
  return years
}

/*
Time: 810ms Passed: 101Failed: 0
Test Results:
nbYear
Basic tests
Completed in 4ms
Random tests
Testing nbYear x99
Completed in 34ms
You have passed all of the tests! :)


*/


function nbYear (p0, percent, aug, p) {
    // Create variable to accomodate the number of years
    let year = 0
    // Loop until the population is greater or equal to target
    while (p0 < p) {
      p0 = p0 + p0 * percent / 100 + aug
      year++
    }
    return year
  }