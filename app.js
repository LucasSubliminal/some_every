console.log("Its Working")
function hasOddNumber(arr){
    return arr.some(function(odd){
        return odd % 2 !==0;
    })
}

function hasAZero(num) {
    const numStr = num.toString();
    return numStr.includes('0');
  }

function hasOnlyOddNumbers(arr){
    return arr.every(function(num){
        if(num % 2 !==0){
            return true
        } else {
            return false
        }
    })
}

function hasNoDuplicates(arr){
    return arr.every(function(val){
      return arr.indexOf(val) === arr.lastIndexOf(val);
    });
  }

//Need help going through these two problems
function hasCertainKey(arr, key){
    return arr.every(function(val){
      return key in val
    });
  }

function hasCertainValue(arr, key, value){
    return arr.filter(function(obj){
        return obj[key] == value
        }).length > 0 ? true : false
}