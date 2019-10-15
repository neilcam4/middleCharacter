function getMiddle(string){
    var length = string.length
     if(length <= 2){
        return string
     } else {
       var middle = length/2
       return result = string.slice(middle -0.5, -middle + 0.5)
     }
}