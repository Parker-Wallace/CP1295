## Global Functionality
- BoxCar object
    ```
    Boxcar {
        Boxcar Id
        TARE weight
        Max Gross Weight
        Cargo Weight
        Gross weight
    }
    ```
- `return to menu` buttons hide the current div and display div A

##  div A

5 `radio` buttons 
- create boxcar
- add freght 
- boxcar data
- warehouse data
- all freight status

> on press hide div A and display the coorsponding div menu
when returning to div A clear raio sleection

### functions

5 functions called display div X which handle each divs functionailty

## Div B

5 text inputs
- boxcar id **(must be in format BX123)**
- TareWeight **(must be between 0 - 20,000)**
- max gross wegiht **(must be greater than TareWeight and between 0-20,000)**
- cargo weight **(readonly, default to 0)**
- gross wegith **(readonly, Tareweight + cargo weight)**

3 buttons
- process box car -> add the box car to the table of defined box cars
- reset form -> reset the enabled input fields
- return to main page -> hides dib B display div B

## functions

- `reset` button clears all input fields, set cargo weight to 0 and recalc gross weight
- `add boxcar` to configured boxcar array if there are no errors
- display divc on add boxcar to display all configured boxcars

## Div C
table\
headers
- box car id
- tare
- max gross
- cargo
- gross

footer
- total cargo weight

2 buttons
- return to create box car (hide div C and reset div B form)
- return to main page

## div D

table
- header(s)
  - list of box car id from configured list 

form
- 4 inputs 
  - box car selected - read only whatever was selected from prev. table
  - transport Id
  - description
  - cargo weight
- 2 buttons
  - process cargo 
  - reset form

return to main page button

### functionality
- lock form on load
- load boxcar id table on load
- lock boxcar id table on selection
- unlock form on selection
- update box car selected field with selected field

- if cargo weight entered is above the max gross weight it is added to warehouse manifest **(display span message "Cargo diverted to warehouse weight exceeded")** otherwise add it to boxcar manifest
- ensure > 0 and `isNAN` testing
- if added to boxcar on process display div D and div E
otherwise Div D and div F