const display =document.getElementById('input_box')
const input =document.getElementsByName('input')



let str = '';

let inputArr = Array.from(input)

inputArr.forEach((item) =>{
    item.addEventListener("click",(e)=>{
        switch(e.target.value){
            case '=':
                str= eval(str)
                display.value=str 
                break;
             case 'AC':
                str=''
                display.value=str
                break;
            case 'DE':
                str= str.substring(0, str.length -1)
                display.value=str
                break;
            case '%':
                str = (parseFloat(str) / 100).toString();  // Converts percentage
                display.value = str;
                break;
            
            case '✓':
                const num = parseFloat(str);
                
                if (!isNaN(num) && num >= 0) {
                    str = Math.sqrt(num).toString(); 
                    display.value = str;
                } else {
                    display.value = "Invalid Input";  
                    str = '';
                }
                break;
            case '^':
                str *=2 
                display.value=str

            case 'ƒ':
               str = parseFloat(str * (str - 1).toFixed())
                display.value=str
                break;


                
                
        default:
            str += e.target.value
            display.value=str;       
        }
      


       
       
    })
})


function fact (fact){
 return  fact * (fact -1)
}
let result = fact(10)
console.log(result);