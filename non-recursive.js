function generatePermutationsFromArray(a) {
    /* Procedure to generate all possible permutations for given array. 
    Pseudocode source: https://en.wikipedia.org/wiki/Heap%27s_algorithm 
    c : array of int                                                 */
    var c = [];
    var n = a.length;
    var result = [];
    // for i := 0; i < n; i += 1 do
    // c[i] := 0
    // end for
    for (i = 0; i < n; i++) {
        c.push(0);
    }
    result.push(a.slice()); // slice for shallow copying
    // i := 0;
    var i = 0;
    // while i < n do
    while (i < n) {
        // if  c[i] < i then
        if (c[i] < i) {
            // if i is even then
            if (i % 2 == 0) {
                // swap(A[0], A[i])
                swap(a, 0, i);
            }
            // else
            else {
                // swap(A[c[i]], A[i])
                swap(a, c[i], i);
            }
            // end if
            result.push(a.slice());
            // c[i] += 1
            c[i] += 1;
            // i := 0
            i = 0;
            // else
        }
        else {
            // c[i] := 0
            // i += 1
            c[i] = 0;
            i += 1;
        }
        // end if
        // end while
    }
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    return result;
}

function generatePermutationsFromString(s) {
    var tempArray = generatePermutationsFromArray(s.split(""));
    var result = [];
    tempArray.forEach(element => {
        result.push(element.toString().replace(/,/g, ""));
    });
    return result;
}

// TESTING
generatePermutationsFromArray(["a","b","c"]); // returns: [ [ 'a', 'b', 'c' ], [ 'b', 'a', 'c' ], [ 'c', 'a', 'b' ], [ 'a', 'c', 'b' ], [ 'b', 'c', 'a' ], [ 'c', 'b', 'a' ] ]
generatePermutationsFromString("abc"); // returns [ 'abc', 'bac', 'cab', 'acb', 'bca', 'cba' ]
