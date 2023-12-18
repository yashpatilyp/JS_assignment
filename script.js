          // Function to reset the result field to blank
          const resetResult = () => {
                     // Event listeners to reset result when any input is changed
          document.getElementById("inputField1").addEventListener("input", resetResult);
          document.getElementById("inputField2").addEventListener("input", resetResult);
          document.getElementById("operatorDropdown").addEventListener("change", resetResult);
                    document.getElementById("result").value ="";
                   
          };
          
          // Function to calculate the result
          const calculate = () => {
                    // Get input values and operator
                    var num1 = parseFloat(document.getElementById("inputField1").value);
                    var num3 = parseFloat(document.getElementById("inputField2").value);
                    var operator = document.getElementById("operatorDropdown").value;
          
                    // Perform calculation based on the selected operator
                    var result;
                    switch (operator) {
                    case "+":
                    result = num1 + num3;
                    break;
                    case "-":
                    result = num1 - num3;
                    break;
                    case "*":
                    result = num1 * num3;
                    break;
                    case "/":
                    result = num1 / num3;
                    break;
                    default:
                    result = "Invalid operator";
                    }
          
                    // Display the result
                    document.getElementById("result").value = result;
          };
          
         
          