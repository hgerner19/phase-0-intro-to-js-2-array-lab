// Write your solution here!
const cats = ["Milo","Otis","Garfield"];
function destructivelyAppendCat(name){
    cats.push("Ralph");
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    const appendCat = [...cats, "Broom"];
    return appendCat;
    return cats;
}
function prependCat(name){
    const prependCat = ["Arnold", ...cats];
    return prependCat;
    return cats;
}
function removeLastCat(){
    
    return cats.slice(0,cats.length -1);
    return cats;

}
function removeFirstCat(){
    
    return cats.slice(1);
  
    return cats;
}