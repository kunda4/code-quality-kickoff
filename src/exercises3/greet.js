/** Refactor the different functions below by improving their structure and code quality.

function greet(name) {
    if (name) {
      return "Hello, " + name + "!";
    } else {
      return "Hello!";
    }
  }
  */

const greet = (name) => (name ? `Hello, ${name}!` : "Hello!");
