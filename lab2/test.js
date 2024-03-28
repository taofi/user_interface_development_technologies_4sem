(function () {
    'use strict';
    // get  all  inputs as an array (not HTMLCollection)
    var inputs = Array.prototype.slice.call(document.getElementsByTagName('input'));

    // add event listeners
    document.getElementById('go').addEventListener('click', doWork);
    document.getElementById('clear').addEventListener('click', function () {
        inputs.forEach(function (input) {
            input.value = "";
        });
    });
        
    function doWork() {
        // try to solve the puzzle one section at a time
        ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'].forEach(function (item, index) { doSection(item) });
    }

    function doSection(sectionLetter) {
        var sectionElements = getElementsInSection(sectionLetter),
            elementsWithoutValue = [],
            i = 0;
                
        // try to find it with the first algo
        for (; i < sectionElements.length; i++) {
            doSolveAlgorithm1(sectionElements[i]);

            if (!sectionElements[i].value) {
                elementsWithoutValue.push(sectionElements[i]);
            }
        }

        // try the unsolved ones with the second algo
        elementsWithoutValue.forEach(function (element) {
            doSolveAlgorithm2(sectionElements, element);
        });
    }

    function doSolveAlgorithm2(sectionElements, element) {
        var sectionPossibleValues = {},
            i = 0,
            elementPossibleValues;

        // get all other section possible values
        sectionPossibleValues = getAllOtherPossibleValuesForSection(sectionElements, element);

        // get possible values for this element
        elementPossibleValues = getPossibleValues(element);
        var length = elementPossibleValues.length;

        // remove any possible values if they show up as possible values for
        // anything else in this section
        for (i = length; i >= 0; i--) {
            if (sectionPossibleValues[elementPossibleValues[i]]) {
                elementPossibleValues.splice(i, 1);
            }
        }

        // if only one number is left, update it
        if (elementPossibleValues.length == 1) {
            element.value = elementPossibleValues[0];
            setPossibleValues(element, elementPossibleValues);
        }
        else if (elementPossibleValues.length > 1) {
            setPossibleValues(elementsWithoutValue[i], elePossibleValues);
        }
    }

    function getElementsInSection(sectionId) {
        var sectionElements = [];
        inputs.forEach(function (element, index) {
            if (element.id.substring(0, 1) === sectionId) {
                sectionElements.push(element);
            }
        });
        return sectionElements;
    }

    // gets all unique numbers possible or present in the section
    // not including the passed the element
    function getAllOtherPossibleValuesForSection(elements, element) {
        var currentElementPossibleValues,
            sectionPossibleValues = {};

        for (var j = 0; j < elements.length; j++) {
            if (elements[j] !== element) {
                currentElementPossibleValues = getPossibleValues(elements[j]);
                for (var k = 0; k < currentElementPossibleValues.length; k++) {
                    sectionPossibleValues[currentElementPossibleValues[k]] = true;
                }
            }
        }

        return sectionPossibleValues;
    }

    function doSolveAlgorithm1(element) {
        var possibleValues = [];

        if (!element.value) {
            possibleValues = tryFindValue(element);

            // if there is only 1 possible value, set it
            if (possibleValues.length == 1) {
                element.value = possibleValues[0];
            }

            setPossibleValues(element, possibleValues);
        }
        else {
            // element already has a value
            setPossibleValues(element, [element.value]);
        }
            
    }

    function getPossibleValues(element) {
        return element.getAttribute('data-possible-values').split(',');
    }

    function setPossibleValues(element, possibleNumbers) {
        element.setAttribute('data-possible-values', possibleNumbers.join(','));
    }

    function tryFindValue(ele) {
        // find all the known unique numbers in the row, column, and section
        var knownNumbers = findKnownNumbersFor(ele),
            i = 1,
            possibleNumbers = [];

        // use this list to find any unique numbers that are NOT found
        for (; i <= 9; i++) {
            if (!knownNumbers[i]) {
                knownNumbers, possibleNumbers.push(i);
            }
        }

        return possibleNumbers;
    }

    function findKnownNumbersFor(element) {
        // coords: section | row | column
        var coords = [[0, 1], [2, 3], [4, 5]],
            knownNumbers = {},
            i = 0,
            id;

        for (; i < coords.length; i++) {
            // get current identifier from coords
            id = element.id.substring(coords[i][0], coords[i][1]);

            // set knownNumbers based on values found
            inputs.forEach(function (element) {
                if (element.id.substring(coords[i][0], coords[i][1]) == id &&
                    element.value) {
                    knownNumbers[element.value] = true;
                }
            });
        }

        return knownNumbers;
    }
}());