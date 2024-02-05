let array:string[] = ["Labeeb","khan","zaain"];
function arrays() {
    function addvalue(item:string){
        array.splice(2,0,item);
        return array;
    }
    function removevalue(){
        array.pop();
        return array;
    }
    return{addvalue,removevalue};
}
let hello = arrays();
console.log(hello.addvalue("Ali"));
console.log(hello.removevalue());