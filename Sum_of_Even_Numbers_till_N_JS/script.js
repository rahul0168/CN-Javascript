
/* Declare and implement your function here 
eg: function example(parameter_name1,parameter_name2....){}
Handle the input/output from main()
*/




process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
input_stdin += data;
});

process.stdin.on('end', function () {
input_stdin_array = input_stdin.split("\n");
main();    
});

function readLine() {
return input_stdin_array[input_currentline++];
}


function main() {

    /* Read your input here 
    eg: For string variables:   let str = String(readLine()); 
        For int variables: let var_name = parseInt(readLine());
        For arrays : const arr = readLine().replace(/\s+$/g, '').split(' ');
    */
      let n = String(readLine());
   
    let sum = 0;

for (i = 1; i <= n; i++)
{
if(i%2 == 0)
{
sum = sum+i;
}
}
    /*
    Call your function with the input/parameters read above
    eg: let x = example(var_name, arr);
    */
  console.log(sum);
   /*
   Log your output here 
   eg: console.log(x);
   */

}