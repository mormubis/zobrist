# Changelog

## 1.0.0 — 2026-04-07

- 781 Polyglot standard Zobrist hash keys as a readonly `bigint` array.
- `piece(square, type, color)` accessor for piece-square keys.
- `turn(color)` accessor — returns the turn key for white, `0n` for black.
- `castling(color, side)` accessor for castling rights keys.
- `enPassant(file)` accessor for en passant file keys.
- Verified against Polyglot reference test vectors.
- ESM-only, zero runtime dependencies.

## 0.1.0 — 2026-04-07

- Initial release.
