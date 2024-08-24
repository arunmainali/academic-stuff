# Description
The `fopen()` function opens the file whose name is the string pointed to by path and associates a stream with it.

The argument **mode** points to a string beginning with one of the following letters:
- `r` Open for reading. The stream is positioned at the beginning of the file. Fail if the file does not exist.
- `w` Open for writing. The stream is positioned at the beginning of the file. Create the file if it does not exist.
- `a` Open for writing. The stream is positioned at the end of the file. Subsequent writes to the file will always end up at the then current end of file, irrespective of any interevening fseek(3) or similar. Create the file if it does not exist.