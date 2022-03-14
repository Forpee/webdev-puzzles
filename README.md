<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>Web Dev Puzzles</h1>

---

<span>Web Dev Puzzles that are similar to chess puzzles

From basic to advanced: test how well you know JavaScript, refresh your knowledge a bit, or prepare for your coding interview! :muscle: :rocket: I update this repo regularly with new questions. I added the answers in the **collapsed sections** below the questions, simply click on them to expand it. It's just for fun, good luck! :heart:</span>



</div>


---


###### 1. What's the output?

```javascript

let user = { name: 'John' };
var admin = { name: 'Admin' };

var name = 'global';

function sayHi() {
    var name = 'Foo'
    console.log(this.name);
}

user.f = sayHi;
admin.f = sayHi;

user.f();
sayHi();
admin['f']();

```

- A: `John` `Foo` `Admin`
- B: `Global` `Foo` `SyntaxError`
- C: `John` `undefined` `SyntaxError`
- D: `Foo` `Foo` `Foo`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

You adding a method to the objects. `this` is dynamically scoped.
And you can use square bracket notation to access properties on an object. The square bracket notation works with any string.


</p>
</details>

---

###### 2. Whats the output?

```javascript

const arr = [1, 2, 3]; 

arr[7] = 20;

console.log(arr);

```

- A: `[1, 2, 3, 20]`
- B: `[1, 2, 3, 4 x null, 20]`
- C: `SyntaxError`
- D: `[1, 2, 3, 4 x empty, 20]`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D

When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called "empty slots". These actually have the value of `undefined`, but you will see something like:

`[1, 2, 3, 4 x empty, 20]`

depending on where you run it (it's different for every browser, node, etc.)


</p>
</details>

---

###### 3. Whats the output?

```javascript

const animal = { name: 'cat' };

const zoo = [animal];

animal = null;

console.log(zoo);

```

- A: `[{}]`
- B: `null`
- C: `[null]`
- D: `[{ name: "cat" }]`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D

You assign the first ... in zoo to equal the object animal



</p>
</details>

---

###### 4. Whats the output?

```javascript

const proxy = new Proxy(target, handler);

```

- A: `[{}]`
- B: `null`
- C: `[null]`
- D: `[{ name: "cat" }]`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D

When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called "empty slots". These actually have the value of `undefined`, but you will see something like:

`[1, 2, 3, 4 x empty, 20]`

depending on where you run it (it's different for every browser, node, etc.)


</p>
</details>

---

###### 5. Whats the output?

```javascript

const arr = [1, 2, 3];
const [y] = arr;

console.log(y);

```

- A: `[1, 2, 3]`
- B: `[[1, 2, 3]]`	
- C: `[1]`
- D: `1`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D

Array Destructuring


</p>
</details>

---

###### 6. Whats the output?

```javascript

!function() {
  console.log(...arguments);
}(1,2,3);

```

- A: `1, 2, 3`
- B: `[1, 2, 3]`	
- C: `ReferenceError`
- D: `SyntaxError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D

IIFE. You can use the NOT bitwise operator to start the expression.


</p>
</details>

---
<!-- One of my favourite web-dv puzzles -->
###### 7. Whats the output?

```javascript

const num = 10;

const incNum = () => num++;
const incNumWithParam = (number) => number++;

num1 = incNum();
num2 = incNumWithParam(num1);

```

- A: `10` `11`
- B: `10`	`10`
- C: `11` `11`
- D: `11` `12

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

Return first then increment.


</p>
</details>

---

###### 8. Whats the output?

```javascript

setTimeout(() => console.log(1), 1000);
Promise.resolve('hi').then(console.log(2));
console.log(3)

```

- A: `3` `2` `1`
- B: `3`	`1` `2`
- C: `2` `3` `1`	
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

IIFE. You can use the NOT bitwise operator to start the expression.


</p>
</details>

---

###### 9. Whats the output?

```javascript

var favouriteFood = 'grapes';

var foodThoughts = function() {
  console.log(`I like ${favouriteFood}`);

  var favouriteFood = 'bananas';

  console.log(`I like ${favouriteFood}`);
}
}

```

- A: `3` `2` `1`
- B: `I like undefined`	`I like bananas`
- C: `2` `3` `1`	
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

IIFE. You can use the NOT bitwise operator to start the expression.


</p>
</details>

---

###### 10. Whats the output?

```javascript

let foo = function bar() {
  return 'foo';
}
foo()
bar()

```

- A: `3` `2` `1`
- B: `I like undefined`	`I like bananas`
- C: `2` `3` `1`	
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

bar is actually enclosed into its own scope. `bar` gets added to its won execution context variable environment


</p>
</details>

---

###### 11. Whats the output?

```javascript

var a = { 
  baz() {console.log(this)}
}

var b = { 
  foo() {return function() {console.log(this)}}
}

var c = { 
  bar() {return ()  => console.log(this)}
}

```

- A: `3` `2` `1`
- B: `I like undefined`	`I like bananas`
- C: `window()` `window()` `c`	
- D: `a` `window obj` `c`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D

bar is actually enclosed into its own scope. `bar` gets added to its won execution context variable environment


</p>
</details>

---

###### 11. Whats the output?

```javascript

function printName(firstName) {
  return function (lastName) {
    console.log(`${firstName} ${lastName}`)
  }
}

const getName = printName()


```

- A: `3` `2` `1`
- B: `I like undefined`	`I like bananas`
- C: `window()` `window()` `c`	
- D: `a` `window obj` `c`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D

bar is actually enclosed into its own scope. `bar` gets added to its won execution context variable environment


</p>
</details>

---
