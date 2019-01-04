let keyValue = 1000;
function test() {
    console.log('Tested');
    keyValue = 2000;
}

let ab = "Some text";

// Grouping exports
export { keyValue, test };
// export default ab; // Will be the primary export