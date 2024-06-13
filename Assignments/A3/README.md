# CP1295 Advanced JavaScript – Assignment 03 – 3% 

Contents 
A. Brief Description 
B. Form Layout 
C. Operational Instructions for the form. 
D. Error Control 
E.Provided Code 
F. Grading Rubric 
G. Submission Requirements 
Page 1 
Page 2  
Page 3 
Page 4  
Page 5 
Page 6 
Page 7 
H. Code Requirements

 
## A. Brief Description 
 
Specifications of this assignment are based on Native Java Script. 

Solution for this assignment must use only javaScript. (jQuery will not be graded) 

The CNA rail system will return later in the course. 

This assignment will focus on Use of Timers to control events. 
 
 
 
### The Story Line. 
The CNA automotive research group require a basic Web Page to display battery performance for varous operating conditions.

For this assignment a simple form will allow input for speed in Km/h. The form is dynamic. A timer will tick every two seconds. This tick represents 1 minute in real time. 

A primer for this assignment occurred on June 10 to explain how the batery monitoring system works. 

Details will be provided in the assignment. A spreadsheet is provided to verify the program results. 

Starter code is provided. It includes HTML, CSS, and JavaScript code. It is not complete. This code was in the demonstration on June 10. You may delete all and use your own HTML, CSS and JavaScript. 

The focus of this assignment is in on the use of timers and associated code to control events in the HTML document. 
 
## B. Form Layout

A single form is used. 
 
Initial Screen to be displayed 
when program starts 
 
 
 
 
 
 
 
Corresponding field labels for the provided form. 
 
 
  
 
## C. Operational Instructions for the form. 
 
 
This is the default initial start of the 
program. 
Nothing happens until you first click on  
Start.  
This starts the timer that ticks at a rate of 
2000 milliseconds. (2 seconds between 
ticks). Interval for timer is 2000. 
The timer will tick and add 1 to the Timer per tick cycle. 
 
 
The timer is ticking at a rate of 1 tick per 
every 2 seconds. I will refer to this as a per 
cycle. 
Per Cycle the Timer will advance by 1. 
This represents 1 minute of time. 
Notice that the battery has no charge. 
 
 
Next activity is to charge up the battery. 
Click on charge. Notice that the Charging 
indicator is now indicated. The two radio 
buttons should be set to disabled. They are 
under program control. 
When the car is in charging mode the 
battery power is increasing at a rate of 12% 
per cycle. After 9 cycles, the battery should 
be fully charged. Only one of the two radio buttons can be showing. It is possible that both may be off. 
When the battery is fully charged, the charge indicator will not indicate charging. 
 

When the battery is fully charged, a 
message will indicate this fact. 
Notice that the Battery Power is at 
100% and the Charging indicator is not 
lit. 
 
 
 
 
Driving the car. 
Enter the Speed in Km/hr. 
60 Km/hr is the same as 1 Km/min. 
Notice that the Speed Km/min is 
updated. (division by 60). 
The battery will lose 1% of its charge 
per cycle(minute) at this speed. There 
will be 96 minutes of battery time left. 
 
 
Screen shot was taken 5 cycles after 
driving started. 
120 Km/hr is 2 Km/min. 
Battery is losing power at a rate of 2% 
per minute. 5 Cycles shows that 10% 
power has been lost. 
45 cycles (45 min) left to use up the 
remaining 90% of remaining power. 
‘Driving Car’ message displayed 
  
The car will continue to run until the 
battery is depleted. A message will appear 
at this time. 
The driving indicator will no longer be lit. 
 
 
 
 
Use can select ‘charge’ to top up the battery again. 
 
 
Reset buton will  
(1) reset all of the text fields 
(2) will reset the timer to 0 and stop 
counting  up. 
(3) will turn off Charging and Driving 
indicatators. 
 
To use the simulator, the start button will have to be selected. 
 
Screen shot (after Reset Selected – below) 
 
The display will show the Reset message 
with all control appearing as they would 
during initial startup of the program. 
 
## D. Error Control 
 
Error Control. 
Only 1 text  field is used. 
 
Input field testing 
(1) numeric error test 
(2) range testing accept (1 to 240) 
Note: the radio buttons are set as diabled. 
They will appear dim. Do not spend effort in 
making them brighter. 
 
 
Range must be between 1 and 240 (inclusive). 
 
 
 
 
 
 
 
 
 
 
 
  
## E.Provided Code 
You are provided with the following starter code 
(1) HTML Code that matches description in section B 
(2) CSS sheet 
(3) JavaScript (starter code that will require completion) 
 