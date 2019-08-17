//helpers.js utility
export const chunk = (string, distance, delimiter) => {
  let ret = [];
  
  for(let i=0; i<string.length; i+=distance) {
    let s = string.substr(i, distance);
    s = s.toString().match(/.{2}/g).join(" ");
    ret.push(s);
  }

  ret = ret.join(delimiter);

  return ret;
}

export const hexToBase64 = (hexstring) => {
  return btoa(hexstring.match(/\w{2}/g).map(function(a) {
    return String.fromCharCode(parseInt(a, 16));
  }).join(""));
}