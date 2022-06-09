// Please implement the function isPalindrome to pass the test cases below.
function isPalindrome(inputString) {
    throw new Error("Function not implemented.");
}

function testCase(description, inputString, expectedResult) {
    const result = isPalindrome(inputString);
    let resultString;
    if (result === expectedResult) {
        resultString = `✅ Passed`;
    } else {
        resultString = `❌ Failed`;
    }
    console.log(`${resultString} - Test Description: ${description}. Test Input String: '${inputString}'`)
}

testCase("One letter", "a", true);
testCase("Two different letters", "an", false);
testCase("Duplicate letters", "aa", true);
testCase("Three letter palindrome", "ana", true);
testCase("Four letter palindrome", "noon", true);
testCase("Four letter non-palindrome", "nine", false);
testCase("Seven letter palindrome", "racecar", true);
testCase("Ignores case", "Racecar", true);
testCase("Ignores odd spaces", "taco cat", true);
testCase("Ignores non-letters", "racecar?", true);
testCase("Large palindrome ignores case, spaces and punctation", "Eva, can I see bees in a cave?", true);
testCase("Large non-palindrome with case, spaces and punctation", "Did you hear that?", false);