Debugging:
1. The bug was that the text entered was treated as strings, so adding them concatenated them.
2. I fixed it by converting the variables num1 and num2 into integers before calling the sum function. You can do it with:
    num1 = parseInt(num1);
    num2 = parseInt(num2);
Network Tab:
1. citylots.json
2. part2.js
3. 1.0 kB
4. 67.95ms
   
5. User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36
6. Server: Apache
7. Last-Modified: Tue, 26 Jan 2021 22:14:13 GMT
8. Content-Type: application/json

9. fetchData