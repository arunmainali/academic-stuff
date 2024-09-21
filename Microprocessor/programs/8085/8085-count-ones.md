
LDA 2050H      ; Load the number from memory location 2050H into the accumulator (A)
MVI C,08H      ; Load 08H into register C (this represents the 8 bits of the number)
MVI B,00H      ; Initialize register B to 00H (this will count the number of 1's)
X: RAR         ; Rotate the accumulator (A) right through the carry flag
   JNC Y       ; If no carry (i.e., the bit was 0), jump to label Y
   INR B       ; If there was a carry (i.e., the bit was 1), increment B (count the 1)
Y: DCR C       ; Decrement the loop counter C (checking all 8 bits)
   JNZ X       ; If C is not zero, repeat the loop
MOV A,B        ; Move the count of 1's from B to the accumulator A
STA 2055H      ; Store the result (the number of 1's) in memory location 2055H
HLT            ; Halt the program
