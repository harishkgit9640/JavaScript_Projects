const calculateTemp = () =>{

    const numberTemp = document.getElementById('temp').value;
    const tempSelect = document.getElementById('temp_opt');
    const valueTemp = temp_diff.option[tempSelect.selectIndex].value;

    const celToFah = (cel)=>{
        let farenheit = Math.round((cel * 9/5)+32);
        return farenheit;
    }
    const fehToCel = (fehr)=>{
        let Celsius = Math.round((fehr -32)*5/9);
        return Celsius;
    }
    let result;

    if (valueTemp == 'cel') {
        result = celToFah(numberTemp)
        document.getElementById('Fresult').innerHTML = `= ${result} Farenheit`;
    }
    else{
        result = fehToCel(numberTemp)
        document.getElementById('Fresult').innerHTML = `= ${result} Celsius`;
    
    }
}