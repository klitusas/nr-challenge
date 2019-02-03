# New Relic Apdex App

New Relic Apdex App implemented according to Model View Controller (MVC) pattern and requirements set out in the description.

## Instructions

#### Install

`npm install`

#### Launch

`npm start`

#### Test

`npm test`

## Performance

 The agorithms of the application are based on ES6 functionalities. 

Searching algorithms considered but not implemented:
* Binary Search - worst case: O(log(n)) - to make a use of the algorithm we would have to generate an unique id and sort the array. The implementation we have right now has a linear approach where n the worst case scenario we have to look at every item in the array thus means it would run in O(n) complexity. After tesing both implementation there has not been any significant difference.

Searching algorithms considered but not implemented:
* Quick Sort - worst case: O(n2) - after testing quicksort as opposed to sort() - sort() was a clear winner.

Array.prototype.sort was used instead. ECMAScript does not define which sorting algorithm needs to be used, so each browser can implement its own algorithm. For example, Mozilla Firefox uses the merge sort as the Array.prototype.sort implementation, while Chrome uses a variation of the quick sort.

Binary Search requires 
## Entry point

`http://localhost:8080/`


## Testing

- Mocha

