
LDA 2200H      ; Load the length of the block into accumulator A
MOV C,A        ; Move the length into register C (loop counter)
LXI H,2201H    ; Load HL with the starting address of the block (2201H)
MVI A,00H      ; Initialize A with 00H (this will hold the maximum value)

X: CMP M       ; Compare the content of memory location pointed to by HL with A (current maximum)
   JNC Y       ; If A >= M, jump to label Y (no change to maximum)
   MOV A,M     ; If M > A, move M (the new maximum) into A
Y: INX H       ; Increment HL to point to the next memory location
   DCR C       ; Decrement the loop counter (C)
   JNZ X       ; If C is not zero, repeat the loop
STA 2300H      ; Store the final maximum value in memory location 2300H
HLT            ; Halt the program
