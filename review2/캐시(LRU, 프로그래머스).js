function solution(cacheSize, cities) {
  let answer = 0;
  let cache = [];
  let miss = 0,
    hit = 0;

  if (cacheSize === 0) {
    return cities.length * 5;
  }

  cities = cities.map((city) => city.toLowerCase());

  for (let i = 0; i < cities.length; i++) {
    const idx = cache.indexOf(cities[i]);

    if (cache.length < cacheSize && idx === -1) {
      cache.push(cities[i]);
      miss++;
    } else if (idx !== -1) {
      cache.splice(idx, 1);
      cache.push(cities[i]);
      hit++;
    } else {
      cache.shift();
      cache.push(cities[i]);
      miss++;
    }
  }

  answer = hit * 1 + miss * 5;

  return answer;
}
