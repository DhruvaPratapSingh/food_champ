
import {sum} from "../sum"    
test("Sum of two numbers",()=>{
const res = sum(4,5);
// Assertion
expect(res).toBe(9);
})

// ""inside ""gives  the description of test case