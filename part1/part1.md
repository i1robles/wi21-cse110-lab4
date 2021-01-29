1. It will print the value of i because variables declared with var are visible through block codes.
2. It will print the value of discountedPrice because variables declared with var are visible through block codes.
3. It will print the value of finalPrice because variables declared with var are visible through block codes and it was declared inside the same block it is entered into log.
4. It will return 50, 100, and 150 in an array. The function loops through each entry of the prices array entered, multiplies each by a decimal to remove the "discount" entered, rounds those new numbers if applicable, and saves those numbers into the array returned at the end.
5. There will be an error, variables declared with let only exist in the blocks they are declared in (or blocks nested within).
6. There will be an error, variables declared with let only exist in the blocks they are declared in (or blocks nested within).
7. It will print the value of finalPrice because it was declared inside the same block it is entered into console.log (they are in the same scope).
8. It will return 50, 100, and 150 in an array. The function loops through each entry of the prices array entered, multiplies each by a decimal to remove the "discount" entered, rounds those new numbers if applicable, and saves those numbers into the array returned at the end.
   For Q9-11, the values of a const variable cannot be changed, so there are errors. But I will answer these as if the variable assignment worked to answer them in terms of scope.
9. There will be an error, variables declared with let only exist in the blocks they are declared in (or blocks nested within).
10. There will be an error, variables declared with const only exist in the blocks they are declared in (or blocks nested within).
11. It will print the value of finalPrice because it was declared inside the same block it is entered into console.log (assuming the variable assignment worked, but in reality a const cannot change and will have cause an error).
12. There will be an error because const finalPrice cannot be reassigned. If we assume that worked, then it would return 50, 100, and 150 in an array. The function loops through each entry of the prices array entered, multiplies each by a decimal to remove the "discount" entered, rounds those new numbers if applicable, and saves those numbers into the array returned at the end.
13. A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0]
14. A '3' + 2
    '32'            //treated 3 as a string and concatenated
    B '3' - 2
    1               //subtraction treats as integer
    C 3 + null
    3               //did arithmetic, treated null as zero
    D '3' + null
    '3null'         //treated 3 as a string and concatenated
    E true + 3
    4               //did arithmetic, treated true as one
    F false + null
    0               //did arithmetic, treated false and null as zeros
    G "3" + undefined
    '3undefined'    //treated 3 as a string and concatenated
    H "3" - undefined
    NaN             //tried to do arithmetic but couldn't, not a number
15. A. '2' > 1
    true            //treats as integers, 2 is greater
    B. '2' < '12'
    false           //both are strings, so it treats them as strings and 1 comes before 2 alphabetically
    C. 2 == '2'
    true            //converts '2' to an int
    D. 2 === '2'
    false           //=== doesn't do type conversions, int does not equal string
    E. true == 2
    false           //true is converting to an int of 1
    F. true === Boolean(2)
    true            //Boolean(a) where a != 0 returns true, they are both of the boolean type
16. == does type conversions and === compares the exact data types given
17. How are you? gets printed. It does a conversion from true to 1, then compares 2 to 1, which are not the same. An if check of non-zero returns true, so the second condition is met.
19. 