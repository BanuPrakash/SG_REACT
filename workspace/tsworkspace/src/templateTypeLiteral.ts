type ChessLetter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type ChessNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

type ChessPosition = `${ChessLetter}${ChessNumber}`;

let position1: ChessPosition = "A1";
let position2: ChessPosition = "H8";
// let position3: ChessPosition = "I9"; // Error


type SizeType = "px" | "rem" | "%"

type SpacingType = "margin" | "padding"
type SpacingSides = "top" | "bottom" | "left" | "right"

type Spacing = `${SpacingType}-${SpacingSides}`

type BoxCSS = {
    [key in Spacing]?: `${number}${SizeType}`
}

let box1: BoxCSS = {
    "margin-top": "10px",
    "padding-bottom": "2rem"
}