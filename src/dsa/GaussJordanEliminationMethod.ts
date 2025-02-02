const matrix = [[2,3,4], [5,6,7], [8,9,10]]

for(let i = 0; i < matrix.length; i++) {
    const a = matrix[i][i]
    for(let k = 0; k < matrix[0].length; k++) {
        matrix[i][k] = Math.floor(matrix[i][k] / a)
    }
}

console.log(matrix)
