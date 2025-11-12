let programmingLanguages:string[]=["cpp","python","javascript"];
programmingLanguages.push("ruby");
let myinfo:[string,number,boolean];
myinfo=["Ahmad Nawaz",22,true];
enum level{
    Beginner, Intermediate, Advanced
}
function display(programmingLanguages:string[],minfo:[string,number,boolean],Level:level):string{
return minfo[2]? `${minfo[0]} is ${minfo[1]} years old.
Currently learning TypeScript.
Skill Level: ${level[1]}
Known Languages: ${programmingLanguages}`: `${minfo[0]} is ${minfo[1]} years old.
Skill Level: ${level[1]}
Known Languages: ${programmingLanguages}`
}
console.log(display(programmingLanguages,myinfo,level["Intermediate"]));
