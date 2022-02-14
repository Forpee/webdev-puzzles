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
