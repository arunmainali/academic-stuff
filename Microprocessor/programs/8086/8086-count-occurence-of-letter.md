
.MODEL SMALL
.STACK 100H

.DATA
  ; Define the string and the terminator (null)
  STRING DB 'Microprocessor organization', 0   ; The string with a null terminator
  LETTER DB 'o'                                ; The character to search for
  COUNT DB 0                                   ; The counter initialized to 0

.CODE
  MOV AX, @DATA      ; Initialize the data segment
  MOV DS, AX

  ; Initialize registers
  LEA SI, STRING     ; Load the effective address of STRING into SI
  MOV AL, LETTER     ; Load the letter 'o' into AL
  MOV CX, 0          ; Initialize the counter to 0
  
NEXT_CHAR:
  MOV BL, [SI]       ; Load the next character from the string into BL
  CMP BL, 0          ; Compare BL with null terminator (end of string)
  JE DONE            ; If end of string, jump to DONE

  CMP BL, AL         ; Compare the character with 'o'
  JNE CONTINUE       ; If not equal, jump to CONTINUE

  INC CX             ; Increment the counter if 'o' is found

CONTINUE:
  INC SI             ; Move to the next character in the string
  JMP NEXT_CHAR      ; Repeat for the next character

DONE:
  MOV COUNT, CL      ; Store the result (count) in COUNT
  ; Display result (assuming there's a way to print it)
  ; This part depends on the specific I/O system in place, such as DOS interrupts for display
  
  MOV AH, 4CH        ; Terminate the program
  INT 21H            ; DOS interrupt to exit

END
