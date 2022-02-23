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

function secureVar() {
    let user = {
        name: 'John',
        surname: 'Johnson',
        _age: 25,
        _password: '********************************',
    };

    user = new Proxy(user, {
        ownKeys(target) {
            return Object.keys(target).filter(key => !key.startsWith('_'));

        },

        //If we ever were to return a property name not in the OwnKeys trap, we add this to set enumerabel to true so it will return the value
        getOwnPropertyDescriptor(target, name) {
            return {
                enumerable: true,
                configurable: true
            }
        }
    })

    for (let key in user) {
        console.log(user[key])
    }
}

// Create protected properties

const person = {
    name: 'John',
    surname: 'Johnson',
    _password: '********************************'
}

person = new Proxy(person, {
    get(target, prop) {
        if (prop.startsWith('_')){
            throw new Error('Access denied');
        }
     },
    set(target, prop, value) { },
    ownKeys() { },
    deleteProperty() { },

})