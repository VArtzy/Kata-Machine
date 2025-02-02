const matrix = [[3,-1,4,2], [17,2,1,14], [1,12,-7,54]]

for(let i = 0; i < matrix.length; i++) {
    const pivot = matrix[i][i]
    for(let k = 0; k < matrix[0].length; k++) {
        matrix[i][k] /= pivot
    }
    for (let j = 0; j < matrix.length; j++) {
        if (j !== i) {
            const factor = matrix[j][i];
            for (let k = 0; k < matrix[0].length; k++) {
                matrix[j][k] -= factor * matrix[i][k]
            }
        }
    }
}

console.log(matrix)
