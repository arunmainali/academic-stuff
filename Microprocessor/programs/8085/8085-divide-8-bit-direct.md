
LDA 8050H         ; Load the dividend from memory location 8050H into A
MOV B, A          ; Move the dividend to register B (Backup)
LDA 8051H         ; Load the divisor from memory location 8051H into A
MOV C, A          ; Move the divisor to register C
MVI D, 00H        ; Clear the D register to hold the quotient
DIV_LOOP:         
CMP C             ; Compare the dividend (A) with the divisor (C)
JC END_DIVISION   ; If dividend < divisor, jump to END_DIVISION
SUB C             ; Subtract divisor (C) from dividend (A)
INR D             ; Increment quotient (D)
JMP DIV_LOOP      ; Repeat the loop
END_DIVISION:
MOV A, D          ; Move the quotient to register A
STA 8052H         ; Store the quotient in memory location 8052H
MOV A, B          ; Restore the original dividend (B) into A
SUB C             ; Calculate the remainder by subtracting divisor
STA 8053H         ; Store the remainder in memory location 8053H
HLT               ; Halt the program
