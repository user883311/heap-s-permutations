# Heap's permutations

This is an implementation of the Heaps' permutations algorithm. The Heap's algorithm generates all possible permutations of n objects. My starting point pseudocode available on the corresponding Wikipedia article (https://en.wikipedia.org/wiki/Heap%27s_algorithm). 

There are both recursive and iterative implementations. 

## Pseudo-code (recursive)
    procedure generate(n : integer, A : array of any):
        if n = 1 then
              output(A)
        else
            for i := 0; i < n - 1; i += 1 do
                generate(n - 1, A)
                if n is even then
                    swap(A[i], A[n-1])
                else
                    swap(A[0], A[n-1])
                end if
            end for
            generate(n - 1, A)
        end if


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
