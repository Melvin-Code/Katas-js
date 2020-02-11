function scrollingText(text){
    let result = []
     
     for( var i = 0; i < text.length; i++){
       result.push((text.slice(i) + text.slice(0,i)).toUpperCase())
     }
     
     return result
   }