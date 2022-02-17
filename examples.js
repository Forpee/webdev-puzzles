/*
* META PROGRAMMING
*/

// Create an array that returns 0 for nonexixtent values

function returnZeroForNonExistentValues() {
    let numbers = [1, 2, 3];

    // dont use proxy = new Proxy... , it should totally replace object
    numbers = new Proxy(numbers, {
        get(target, prop) {
            if (prop in target) {
                return target[prop];
            } else {
                return 0;
            }

        }
    })

    console.log(numbers[290832]);
}

// Proxies with set
// Could typescript be built like this?
function numberArrOnly() {

    let numbers = [];

    numbers = new Proxy(numbers, {
        set(target, prop, value) {
            if (typeof value === "number") {
                target[prop] = val;
                return true;
            } else {
                return false;
            }

        }
    })
}

// Use ownKeys trap to make for..in loop over property names that start with _ in user object
// Private property names like in c++. This is really meta programming