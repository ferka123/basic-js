const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  if (domains.length===0)
    return obj; 
  domains.forEach(domain=>{
    reverseDomain = domain.split(".").reverse();
    for (i=0;i<reverseDomain.length;i++){
      key = "." + reverseDomain.slice(0,i+1).join(".");
      obj[key] = (obj[key] ?? 0) + 1
    }
  })
  return obj;
}

module.exports = {
  getDNSStats
};
