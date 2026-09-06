# Technical Typography

**Date:** 2026-08-14 (Phase 5C)

**Governing rule:** mono means *this is a literal value*. It never means *this site is technical*.

---

## Specification

| Element | Family | Size | Treatment |
|---|---|---|---|
| **Code block** | system mono | 15px / 1.55 | Contained (one of two containers). Subtle background shift. Horizontal scroll permitted |
| **Inline code** | system mono | 0.9em | Very subtle background; must not disturb line rhythm |
| **Repository / package name** | system mono | 0.9em | No background |
| **File path** | system mono | 0.9em | No background |
| **Hash / digest** | system mono | 0.9em | Truncation permitted with full value in `title` |
| **Version string** | system mono | 0.9em | — |
| **Command** | system mono | 0.9em inline, 15px in block | — |
| **CVE / CWE reference** | system mono | 0.9em | Linked to the authoritative record where one exists |
| **URL shown as text** | system mono | 0.9em | Prefer descriptive link text; show a bare URL only when the string itself matters |
| **Dates** | **Public Sans, tabular** | per role | **Not mono** — see `MONO_EVALUATION.md` |
| **Status values** | Public Sans | 15px | Not literals |
| **Technical terms in prose** | **Newsreader — body** | 19px | **Not mono.** "Cross-site scripting" is language, not a literal |

---

## The line that matters most

**A technical *term* is prose. A technical *value* is mono.**

- ✅ *"The parser accepted a header the specification forbids."* — prose
- ✅ *"…the `X-Forwarded-Host` header…"* — mono, because it is a literal string
- ❌ *"The `parser` accepted a `header`…"* — mono as emphasis. Wrong

**Test:** would a reader be misled if this were set proportionally? If yes, mono. If it would merely look less technical, no.

---

## Code blocks

- One of only two permitted containers.
- **Background shift is minimal** — enough to define extent, not enough to become a panel. No border, no radius as a motif, no shadow.
- **No syntax highlighting by default.** It introduces a colour system with semantic meaning that the palette explicitly excludes, and it would multiply across two schemes. If a specific block genuinely needs it in 5D, it becomes a documented exception.
- **No line numbers** unless the prose references specific lines.
- **No copy button** unless blocks are long enough to warrant it.
- Horizontal scroll is legitimate — do not wrap code.

**Expected volume: low.** This is a reasoning site, not a tutorial site. Long code blocks usually indicate the reasoning has been replaced by an implementation dump.

---

## Not a terminal

Explicitly banned, per the rejected patterns:

Terminal chrome · window bars · prompt characters as decoration (`$`, `>`) · blinking cursors · green-on-black code blocks · typewriter effects · ASCII art · `SYSTEM_` prefixes.

**A code block is a code block.** The measured failure case set an entire body face in JetBrains Mono with `SYSTEM_STATUS: ONLINE` headings — the whole category of gesture is closed here.

---

## 5D validation

1. Does inline mono at 0.9em sit comfortably in a 19px serif line without disturbing leading?
2. Do system mono metrics vary enough across platforms to disturb apparatus alignment?
3. Is a code block's background shift visible without reading as a panel?
4. Do long hashes truncate gracefully at 375px?
