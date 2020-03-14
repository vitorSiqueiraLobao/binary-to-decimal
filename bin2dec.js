let read = () => {
    let valueBin = document.getElementById("valueBin")
    let valueDec = document.getElementById("valueDec")  
    
}
let erease = () =>{
    read()
    valueBin.value = ""
    valueDec.value = ""
    
}


let convert = () => {

    let convertionType = document.querySelector('input[id="selector"]:checked').value            

    if(convertionType == "bin2dec"){
        bin2dec()
    }else if(convertionType  == "dec2bin"){
        dec2bin()
    }
}


let bin2dec = () =>{
    read()
    valueDec.value = parseInt(valueBin.value,2).toString(10)
    if(valueDec.value === "NaN"){
        valueDec.value = "Error"
    }
}

let dec2bin = () =>{
    read()
    valueBin.value = parseInt(valueDec.value,16).toString(2)
    if(valueBin.value === "NaN"){
        valueBin.value = "Error"
    }
}