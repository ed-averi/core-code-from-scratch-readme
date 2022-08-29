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