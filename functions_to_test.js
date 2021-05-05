// does not work with exports
// function sums(a, b){
//     return (a+b)
// }

exports.sums = (a,b) => {
    return (parseInt(a)+parseInt(b))
}
exports.multiplys = (a, b) => {
    return (parseInt(a) * parseInt(b))
}

