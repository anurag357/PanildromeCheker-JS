// function palindromeFun (str )
// {
// // convert the string into an array using the string.split() function
// const arrValue = string.split (''); // 

// // use reverse() method to reverse the array values
// const reveArrVal = arrValue.reverse(); 

// // use join() method to group the array values into the string
// const revString = reveArrVal.join('');

// if (string == revString) // if string condition is equal to the revString
// {
// alert('It is a Palindrome string '); // print the Palindrome 
// }
// else {
// alert (' It is not a Palindrome string' ); // if the condition is not true.
// }
// }
// // take a string from the user
// const string = prompt( ' Enter the string to check Palindrome ');
// const value = palindromeFun (string); // call the function
// console.log(value);




function palindrome() {
    var a, b, no, temp = 0;
    no = Number(document.getElementById ("palindrome").value);
    b = no;

    var c = String(document.getElementById("palindrome").value);
    var d = "";
    for (i = c.length-1; i >= 0; i--)
    {
    d = d + c[i]
    }

    while (no > 0)
    {
    a = no % 10;
    no = parseInt( no / 10);
    temp = temp*10 + a;
    }
    if (temp == b || c == d )
    {
    alert( "It is a Palindrome Number");
    }
    else
    {
    alert ("it is not a Palindrome Number");
    }

}