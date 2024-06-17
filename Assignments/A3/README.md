# CP1295 Advanced JavaScript – Assignment 03 – 3% 

|Contents|
|---| 
|[A. Brief Description](#a-brief-description) |
|[B. Form Layout](#b-form-layout) |
|[C. Operational Instructions for the form.](#c-operational-instructions-for-the-form) |
|[D. Error Control](#d-error-control) |
|[E. Provided Code](#eprovided-code) |
|[F. Grading Rubric](#f-grading-rubric) |
|[G. Submission Requirements](#g-submission-requirements) |
|[H. Code Requirements](#h-code-requirements)|

 
## A. Brief Description 
 
Specifications of this assignment are based on Native Java Script. 

Solution for this assignment must use only javaScript. (jQuery will not be graded) 

This assignment will focus on Use of `Timers` to control events. 
 
 
 
### The Story Line. 

The CNA automotive research group require a basic Web Page to display battery performance for varous operating conditions.

For this assignment a simple form will allow input for speed in Km/h. The form is dynamic. A timer will tick every two seconds. This tick represents 1 minute in real time. 

A primer for this assignment occurred on June 10 to explain how the batery monitoring system works. 

Details will be provided in the assignment. A spreadsheet is provided to verify the program results. 

Starter code is provided. It includes HTML, CSS, and JavaScript code. It is not complete. This code was in the demonstration on June 10. You may delete all and use your own HTML, CSS and JavaScript. 

The focus of this assignment is in on the use of timers and associated code to control events in the HTML document. 
 
## B. Form Layout

A single form is used. 
 
Initial Screen to be displayed when program starts

![alt text](<Images/A3 images.png>)
 
Corresponding field labels for the provided form. 

![alt text](<Images/Screenshot 2024-06-13 111952.png>) 
 
## C. Operational Instructions for the form. 

![alt text](<Images/Screenshot 2024-06-13 112004.png>)

This is the default initial start of the program.

Nothing happens until you first click on  
Start. 

This starts the timer that ticks at a rate of 2000 milliseconds. (2 seconds between ticks). Interval for timer is 2000. The timer will tick and add 1 to the Timer per tick cycle.

![alt text](<Images/Screenshot 2024-06-13 112014.png>)
 
The timer is ticking at a rate of 1 tick per every 2 seconds. I will refer to this as a per cycle.

Per Cycle the Timer will advance by 1.

This represents 1 minute of time.

Notice that the battery has no charge.

 ![alt text](<Images/Screenshot 2024-06-13 112023.png>)
 
Next activity is to charge up the battery.

Click on charge. Notice that the Charging indicator is now indicated. The two radio buttons should be set to disabled. They are under program control.

When the car is in charging mode the battery power is increasing at a rate of 12% per cycle. After 9 cycles, the battery should be fully charged. Only one of the two radio buttons can be showing. It is possible that both may be off.

When the battery is fully charged, the charge indicator will not indicate charging. 
 
![alt text](<Images/Screenshot 2024-06-13 112036.png>)

When the battery is fully charged, a message will indicate this fact.

Notice that the Battery Power is at 100% and the Charging indicator is not lit. 
 
 
 
![alt text](<Images/Screenshot 2024-06-13 112046.png>)

Driving the car. 

Enter the Speed in Km/hr. 

60 Km/hr is the same as 1 Km/min. 

Notice that the Speed Km/min is updated. (division by 60). 

The battery will lose 1% of its charge per cycle(minute) at this speed. There will be 96 minutes of battery time left. 
 
 ![alt text](<Images/Screenshot 2024-06-13 112054.png>)

Screen shot was taken 5 cycles after driving started. 

120 Km/hr is 2 Km/min. 

Battery is losing power at a rate of 2% per minute. 5 Cycles shows that 10% power has been lost.

45 cycles (45 min) left to use up the remaining 90% of remaining power. 

‘Driving Car’ message displayed 

 ![alt text](<Images/Screenshot 2024-06-13 112104.png>) 

The car will continue to run until the battery is depleted. A message will appear at this time. 

The driving indicator will no longer be lit. 
 
Use can select ‘charge’ to top up the battery again. 
 
![alt text](<Images/Screenshot 2024-06-13 113259.png>)

Reset buton will

1. reset all of the text fields 
2. will reset the timer to 0 and stop counting  up. 
3. will turn off Charging and Driving indicatators. 
 
To use the simulator, the start button will have to be selected. 
 
Screen shot (after Reset Selected – below) 

 ![alt text](<Images/Screenshot 2024-06-13 112113.png>)

The display will show the Reset message with all control appearing as they would during initial startup of the program. 
 
## D. Error Control 
 
Error Control. 
Only 1 text  field is used.

  ![alt text](<Images/Screenshot 2024-06-13 113506.png>)

Input field testing 
(1) numeric error test 
(2) range testing accept (1 to 240) 
Note: the radio buttons are set as diabled. 
They will appear dim. Do not spend effort in 
making them brighter. 
 
 
**Range must be between 1 and 240 (inclusive).**
 
## E. Provided Code 
You are provided with the following starter code

1. HTML Code that matches description in section B 
2. CSS sheet 
3. JavaScript (starter code that will require completion) 
 
## F. Grading Rubric 
To maximize your grade be sure to consider the Grading Rubric as part of the of list of requirements. 
Items missed are marks that you will not receive.

    
|   |Functional Objectives       |   |
|---|----------------------------|---|
|   |                            |20 |
|A  | Initial Screen             | 
|A1 | Initial Screen matches expected   |1 |
|B  | Start Button                      ||
|B1 | Timer Initiated and will count up | 1 |
|B2 | Timer Message will disappear      |  1 |
|C  | Charge Button                     ||
|C1 | Will add 12% to cycle per cycle   |   1 |
|C2 | Will turn on charging indicator   | 1 |
|C3 | Will stop when 100% reached       | 1 |
|C4 | Will display message 'Battery charged' when 100% reached      |1 |
|C5 | Charging indicator will be turned off when 100% reached       |1 |
|D  | Driving                     |
|D1 | Range Testing for numeric   |1 |
|D2 | Range Testing 0 (error test)    | 1 |
|D3 | Driving Car Message displayed   |1 |
|D4 | Range Testing 241 (error test)  | 1 |
|D5 | Speed Km/min updated. Formula Speed Km_min = Speed Km_hr / 60 |2 |

## G. Submission Requirements 
 
Generate a word document called Assignment 03 – Your name and student number. 
 
### Page 1

1. Add Course Number  
1. Your Name 
1. Your Student Number 
 
### Page 2 

Screen Shot of initial FORM prior to pressing the start button. 
 
### Page 3

Screen Shot showing the battery fully charged 
 
### Page 4

Screen Shot showing a driving test after the battery is fully deleted. 

Start the program. 
1. fully charge the battery 
1. set the speed of the car to 200 km/h 
1. select drive. 
1. run the car until the battery is depleted. 
1. Take the screen shot of this page. 
 
### Page 5

Copy and paste the code for your index.html (Not screen shots) 
 
### Page 6

(or next blank page thereafter) 
Copy and paste the code for your CSS documents. (Not screen shots) 
 
### Page 7 

(or next blank page thereafter) 
Copy and paste the code for the JavaScript code.  

## H. Code Requirements

The assignments are based course outline requirements.

Code used for the completion of this assignment must follow the following guidelines. 

### Inclusions

1. Code must be based on code demonstrated in this course or its pre-requisite course(s) 
 - Course Text Book 
 - Course Notes 
 - Course Handouts 
 - getElementByID (by popular demand)

2. Where DOM element selection is required use only  
    1. document.querySelector(sel )  
    2. document.querySelectorAll(sel) 
 
 
### Exclusions

Code must follow the following exclusion rule(s)

1. innerHTML, outerHTML are not permitted in this course. 
 
2. Use of jQuery. **This assignment is only JavaScript.**  
(future assignments will support limited use of jQuery) 
 
 
End of Assignment