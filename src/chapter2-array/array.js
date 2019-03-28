let framework = "Angular";
// let framework = "React";
console.log(framework);

let x = 1, y = 2;
[x, y] = [y, x];
console.log("x:", x, "  y:", y);


let obj = {x, y};
console.log(obj);

const hello = {
    name: "abc",
    printHello() {
        console.log("hello");
    }
};
hello.printHello();