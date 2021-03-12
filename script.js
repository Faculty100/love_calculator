
const inputOneValue = document.getElementById('inputOne');
const inputTwoValue = document.getElementById('inputTwo');
const btnCalculate = document.getElementById('btn-calculate');
const resultDiv = document.getElementById('result-div');

btnCalculate.addEventListener('click',()=>{

let percentage;

    if(inputOneValue.value == "" || inputTwoValue.value == ""){
        alert('please input names');
    }
    
    else if(inputOneValue.value == "Prince" && inputTwoValue.value == "Mariam"){
        resultDiv.innerHTML = `<h1> ${100}% <h1>` ;

        
    setTimeout(()=>{
        resultDiv.innerHTML = "";
        },4000) ;
    

    }

    else if(inputOneValue.value == "Mariam" && inputTwoValue.value == "Prince"){
        resultDiv.innerHTML = `<h1> ${100}% <h1>` ;

        
    setTimeout(()=>{
        resultDiv.innerHTML = "";
        },4000) ;
    
    }

    else if(inputOneValue.value == "prince" && inputTwoValue.value == "mariam"){
        resultDiv.innerHTML = `<h1> ${100}% <h1>` ;

        
    setTimeout(()=>{
        resultDiv.innerHTML = "";
        },4000) ;
    
    }


    else if(inputOneValue.value == "mariam" && inputTwoValue.value == "prince"){
        resultDiv.innerHTML = `<h1> ${100}% <h1>` ;

        
    setTimeout(()=>{
        resultDiv.innerHTML = "";
        },4000) ;
    
    }

    else if(inputOneValue.value == "Prince" && inputTwoValue.value == "Vera"){
        resultDiv.innerHTML = `<h1> ${100}% <h1>` ;

        
    setTimeout(()=>{
        resultDiv.innerHTML = "";
        },4000) ;

    }

    else if(inputOneValue.value == "Vera" && inputTwoValue.value == "Prince"){
        resultDiv.innerHTML = `<h1> ${100}% <h1>` ;

        
    setTimeout(()=>{
        resultDiv.innerHTML = "";
        },4000) ;

    }

    else if(inputOneValue.value == "Akosua" && inputTwoValue.value == "Prince"){
        resultDiv.innerHTML = `<h1> ${80}% <h1>` ;

        
    setTimeout(()=>{
        resultDiv.innerHTML = "";
        },4000) ;
    

    }

    else if(inputOneValue.value == "Prince" && inputTwoValue.value == "Akosua"){
        resultDiv.innerHTML = `<h1> ${80}% <h1>` ;

        
    setTimeout(()=>{
        resultDiv.innerHTML = "";
        },4000) ;
    

    }

    else if(inputOneValue.value == "Kelvin" && inputTwoValue.value == "Melody"){
        resultDiv.innerHTML = `<h1> ${"syntax error"}% <h1>` ;
        alert("Their Love can't be calculated. try with an advance calculator");
        window.location="https://www.lovecalculator.com/love.php?name1=kelvin&name2=melody";

        
    setTimeout(()=>{
        resultDiv.innerHTML = "";
        },4000) ;
    

    }

   
    
    else{
    percentage = Math.floor(Math.random()* 100 + 1);
    
    resultDiv.innerHTML = `<h1> ${percentage}% <h1>` ;

    setTimeout(()=>{
    resultDiv.innerHTML = "";
    },4000)
    }
    
inputOneValue.value = ""; 
inputTwoValue.value = "";  
}
)