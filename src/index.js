
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var arr = [];
  
  for(let i=0;i<matrix.length;i++){
    if(matrix.length===0 || typeof matrix==="undefined"){
      return [];
    }
    else if(i%2===0){
      arr=arr.concat(matrix[i]);
    }
    else{
      arr=arr.concat(matrix[i].reverse());
    }
  }
  return arr;
}
