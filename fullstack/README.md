# Mail before interview

```
Hello,

Please prepare a development environment with backend framework (express.js) and frontend framework of your choice (preferably vue.js) and a UI framework if possible (element +, bootstrap, material UI...)
There will be 2 exercises :
•	The first about algorithm
•	The second is about creating then fetching web API and building a front-end page 

Please, cloud you create a GitHub account also if you don’t have one. And try to clone a repo from GitHub to be ready.
I will share a private repo to you during the interview where you will store the code.

```

# Checks during interview

**Disable AI extensions before to start**

**Take a photo**

## Fizz Buzz

### Git usage
1. Is the candidate able to clone the repo locally ?
    - through cmd ?
    - through IDE ?
2. name of the branch 
    - should be feature/* or some naming convention
3. Is Candidate able to push the code after the test ?
    - add
    - commit 
    - push

### Dev skills
1. Usage of keyboard shortcut ?
2. Lint / format the code ?
3. How the candidate compile / run the code ?
   - locally ? with node ?
   - online editor ?

### The exercise
[Solution](https://flexiple.com/javascript/fizzbuzz-javascript)

Basic : 
```
for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}
```

> Check 3 (Fizz), 5 (Buzz) and 15 number (FizzBuzz)

![alt text](../assets/FizzBuzz-output.png)

1. Does the candidate succeed FizzBuzz ?
2. How many minutes ?
    - It should not take more than 10 mintes
    - write down : start time - end time
3. Bonus question (oral not coding)
   - If candidate achieve Basic solution, ask if he sees any improvement of the code ?
      - Create a functions with parameters
         - one could be for range of the loop
         - one cloud be for testing % if we change 3 and 5 values

## Api countries

### backend

1. Creation of the Express project
   - Prepared before interview?
   - Created in live?

2. JSON formatting?
   - Does the candidate go through the file  to understanding the data model?

3. Using Nodemon to compile the project?
    - yes / no

4. Successfully creating the first endpoint?
   - yes / no
   - start time - end time
      - it should take 10 minutes

5. Is a filter being implemented for the second endpoint?
   - yes / no
   - start time - end time
      - it should take 10 minutes

6. Errors handling?

### frontend

1. Creating a Vue.js project?
   - Prepared before interview?
   - Created in live?

2. Knowing how to query and iterate through the JSON response from an API?
    - used fetch ?
    - other libs ? (axios, ...)

3. Coding an interface using a UI framework?
   - yes (which framework) / no (basic html/css)

4. Exercise done in JavaScript or TS?

5. Errors handling?

6. Using a linter?

7. Using a code formatter?

Other remarks:
