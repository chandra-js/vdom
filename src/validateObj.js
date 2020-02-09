export const  CheckValidity = (obj) =>{
    for (var key in obj) {
        if ( obj[key] == "")
            return key;
    }
    return true;
}