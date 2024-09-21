
LXI H, 2050H   ; Load the starting address of the array (2050H) into register pair HL
MVI C, 0AH     ; Move the value 0AH (which is 10 in decimal) into register C (this is the loop counter for 10 numbers)
MVI A, 00H     ; Clear the accumulator (A) to hold the sum

X: MOV B, M    ; Move the content of memory pointed by HL (current array element) into register B
   ADD B       ; Add the value in register B to the accumulator (A)
   INX H       ; Increment the HL register pair to point to the next memory location (next number in the array)
   DCR C       ; Decrement the loop counter (C)
   JNZ X       ; If C is not zero, jump back to label X to repeat the process

STA 2060H      ; Store the final sum (in accumulator A) to memory location 2060H
HLT            ; Halt the program
