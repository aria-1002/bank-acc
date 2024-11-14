// Students write their code between these lines. 
//
// Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
//
// Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
//
// Students should carefully read the test cases for the correct output. 
//

// Write isPrime(num), which returns true if the number is prime and false otherwise.
function checkPrimeNum(num) {
    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
    if (num <= 1) {
        return messageFormatter({number: num, isPrime: false});
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return messageFormatter({number: num, isPrime: false});
        }
    }

    return messageFormatter({number: num, isPrime: true});
    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

// Extend with findPrimesInRange(start, end) to return all prime numbers within a specified range.
function findPrimesInRange(start, end) {
    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
    if (!Array.isArray(start)) {
        return messageFormatter('invalid');
    }
    
    let begin = start[0];
    let finish = start[1];
    let primes = [];
    
    for (let i = begin; i <= finish; i++) {
        if (isPrimeNoMessage(i)) {
            primes.push(i);
        }
    }
    
    return messageFormatter([begin, finish, primes]);
    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

// Helper function to check prime without message (for range checking)
function isPrimeNoMessage(num) {
    if (num <= 1) return false;
    
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    
    return true;
}

// Polymorphic messageFormatter function
function messageFormatter(input) {
    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
    if (input === 'invalid') {
        return "Invalid input. Please provide a number or a valid range (array of two numbers).";
    }
    
    if (Array.isArray(input)) {
        return `Primes between ${input[0]} and ${input[1]}: [${input[2].join(', ')}]`;
    }
    
    if (typeof input === 'object') {
        if (input.isPrime) {
            return `${input.number} is a prime number.`;
        } else {
            return `${input.number} is NOT a prime number.`;
        }
    }
    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

// Instructor's test cases
// ===== ===== ===== ===== =====

console.log(checkPrimeNum(2));
// Expected Output: 2 is a prime number.

console.log(checkPrimeNum(1));
// Expected Output: 1 is NOT a prime number.

console.log(checkPrimeNum(13));
// Expected Output: 13 is a prime number.

console.log(checkPrimeNum(25));
// Expected Output: 25 is NOT a prime number.

console.log(findPrimesInRange([10, 20]));
// Expected Output: Primes between 10 and 20: [11, 13, 17, 19]

console.log(findPrimesInRange([30, 50]));
// Expected Output: Primes between 30 and 50: [31, 37, 41, 43, 47]

console.log(findPrimesInRange('test'));
// Expected Output: Invalid input. Please provide a number or a valid range (array of two numbers).