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

function sayHi() {
    console.log(this.name);
}

user.f = sayHi;
admin.f = sayHi;
user.f();
admin.f();
admin['f']();

```

- A: `John` `Admin` `undefined`
- B: `John` `Admin` `SyntaxError`
- C: `John` `Admin` `Admin`
- D: `John` `undefined` `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

The `var` statement does not throw an error with `this` even though it is a globally scoped variable.

And you can use square bracket notation to access properties on an object. The square bracket notation works with any string.


</p>
</details>

---

###### 2. Whats the output?

```javascript

const arr = [1,2,3]; 

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

###### 2. Whats the output?

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

When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called "empty slots". These actually have the value of `undefined`, but you will see something like:

`[1, 2, 3, 4 x empty, 20]`

depending on where you run it (it's different for every browser, node, etc.)


</p>
</details>

---

###### 3. Whats the output?

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

###### 4. Whats the output?

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

###### 5. Whats the output?

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
###### 5. Whats the output?

```javascript

const num = 10;

const incNum = () => num++;
const incNumWithParam = (number) => number++;

num1 = incNum();
num2 = incNumWithParam(num1);

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