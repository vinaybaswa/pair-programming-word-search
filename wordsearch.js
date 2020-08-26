const transpose = function(matrix) {
  const result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    result.push([]);
  }

  for (let k = 0; k < matrix.length; k++) {
    for (let m = 0; m < matrix[k].length; m++) {
      result[m].push(matrix[k][m]);
    }
  }
  return result;
};

const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }
  
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters);

  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  for (const v of verticalJoin) {
    if (v.join('').includes(word)) {
      return true;
    }
  }

  return false;
};

module.exports = wordSearch;
