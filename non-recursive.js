
function generatePermutationsFromArray(a) {
    /* Procedure to generate all possible permutations for given array 
    c : array of int              */
    var c = [];
    var n = a.length;
    var result = [];
    // for i := 0; i < n; i += 1 do
    // c[i] := 0
    // end for
    for (i = 0; i < n; i++) {
        c.push(0);
    }
    // output(A)
    console.log(a);
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
            // output(A)
            // console.log(a);
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

    console.log(result);
}
