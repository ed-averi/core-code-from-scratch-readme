export const nbYear = (p0:number, percent:number, aug:number, p:number): number => {
    for (var years = 0; p0 < p; years++) {
      p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
  }