# Heap's permutations

This is an implementation of the Heaps' permutations algorithm, and the pseudocode available on the corresponding Wikipedia article. 

Source: https://en.wikipedia.org/wiki/Heap%27s_algorithm

## Pseudo-code (non-recursive)
    procedure generate(n : integer, A : array of any):
    c : array of int

    for i := 0; i < n; i += 1 do
        c[i] := 0
    end for

    output(A)

    i := 0;
    while i < n do
        if  c[i] < i then
            if i is even then
                swap(A[0], A[i])
            else
                swap(A[c[i]], A[i])
            end if
            output(A)
            c[i] += 1
            i := 0
        else
            c[i] := 0
            i += 1
        end if
    end while
