### Built-in objects & methods used:
- `Date()` (methods:`.getMonth()`, `.getDate()`, `.getFullYear()`)
- `Number()` (methods: `.isNaN()`, `.isInteger()`)
- `document`: (method: `.querySelect()`)
- miscellaneous methods: `.toFixed()`, `.join()`
### Github Pages link
https://merylmarasigan741.github.io/hw9/
### Path to screenshot
images/image.png
### Reflection questions:
- What part was easiest? **Part 1 b/c it was the simplest function call**
- What part was hardest? **I struggled trying to get `Number(string).isNaN()` to work. Turns out, isNaN is a static method on Number so they had to broken up into 2 lines**
- What did you learn about the Date object? **You can have the `.toLocaleDateString()` automatically return date and month as 2 digit numbers everytime by doing adding `{
  month: "2-digit",
  day: "2-digit",
  year: "numeric"
}` as an argument**
- What did you learn about the Number object? **It has a `.Nan()` method**
- What did you learn about displaying results in the browser? **Even if I put newline chars (i.e. `\n`) in a JavaScript string, it will still render as one single line in the browser**
