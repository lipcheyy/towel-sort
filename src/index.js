
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var arr = [];
   
   if (typeof matrix === "undefined" || matrix.length === 0) {
    return [];
} 
  for(let i=0;i<matrix.length;i++){
    if(i%2===0){
      arr=arr.concat(matrix[i]);
    }
    else{
      arr=arr.concat(matrix[i].reverse());
    }
  }
  
  return arr;
}
