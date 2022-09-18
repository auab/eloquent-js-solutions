/*
Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/

let chessboard1 = '';
for (i=1; i<=8; i++)
{
    for(j=1; j<=8; j++)
    {
        if ((i+j)%2==0)
        {
            chessboard1 += ' ';
        }else 
        {
            chessboard1 += '#';
        }
    }
    chessboard1 += '\n';
}
console.log(chessboard1);

/*
When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size, outputting a grid
of the given width and height.
*/

let chessboardWidth = 5;
let chessboardHeight = 8;
let chessboard2 = '';
for (i=1; i<=chessboardHeight; i++)
{
    for(j=1; j<=chessboardWidth; j++)
    {
        if ((i+j)%2==0)
        {
            chessboard2 += ' ';
        }else 
        {
            chessboard2 += '#';
        }
    }
    chessboard2 += '\n';
}
console.log(chessboard2);