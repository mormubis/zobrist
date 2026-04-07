/** Castling side — kingside or queenside. */
type CastlingSide = 'king' | 'queen';

/** Side to move — `'white'` or `'black'`. */
type Color = 'black' | 'white';

/** Board file (column), `'a'` through `'h'`. */
type File = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';

/** Chess piece type. */
type PieceType = 'bishop' | 'king' | 'knight' | 'pawn' | 'queen' | 'rook';

/** Board rank (row), `'1'` through `'8'`. */
type Rank = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

/** A board square, e.g. `'e4'`. Combination of {@link File} and {@link Rank}. */
type Square = `${File}${Rank}`;

export type { CastlingSide, Color, File, PieceType, Rank, Square };
