# Interaction Language

**Date:** 2026-08-14 (Phase 4)

---

## The character: documentary

Tested against the alternatives:

| Character | Fit | Why |
|---|---|---|
| **Documentary** | ✅ **Selected** | Interactions serve retrieval and reading. The site behaves like a well-kept record — you find things, you read them, nothing performs |
| Editorial | ◐ Close | Right register, but implies a publication's rhythms (issues, features) the site does not have |
| Quiet | ◐ Partly true | A quality, not a character — quiet is *how* it behaves, not *what* it is |
| Technical | ❌ | Drifts toward interface and dashboard aesthetics |
| Tactile | ❌ | Physicality is decoration on a reading site |
| Spatial | ❌ | Requires a spatial metaphor that was rejected |
| Exploratory | ❌ | Implies discovery mechanics; the content is a small set of documents, not a world |

**Documentary means:** every interaction either retrieves something or reveals a detail that was genuinely secondary. Nothing exists to demonstrate capability.

---

## By moment

### Investigation opening
**A link. Immediate.**

No preview overlay, no expanding card, no modal. The reader clicks a title and arrives at the document. Any intermediate state is a delay between intent and content.

### Investigation progression
**Scrolling. That is the entire interaction.**

No stages, no "continue reading", no in-page tabs. The document is complete on arrival, which is also what makes it work with JavaScript disabled.

**In-page anchors** are permitted on long investigations — retrieval, not progression.

### Artifact reveal
**A link, positioned after the reasoning.**

No lightbox, no embedded preview, no repository card fetched from an API. If an artifact is a repository, the link goes to it. The site does not attempt to reproduce GitHub inside itself.

### Related work
**Plain links, below the content.** Manually curated. No hover previews.

### Field notes
**Very short notes render inline in the index** — clicking through to read forty words is friction with no payoff. Longer notes get their own page.

**This is a real decision:** the index for notes is partly the content itself, which suits their brevity and removes a navigation layer.

### Navigation
**Four persistent links. No menu, no overlay, no hamburger** — four items fit at every breakpoint.

**The site name is a link home.** No separate "Home" item.

### Status and metadata
**Not interactive at launch.**

Status is information, not a control. When volume justifies filtering (~10 items), status and domain become filters *inside the index* — never in the navigation.

### Filtering (from ~10 items)
Plain controls. Multiple selection within a dimension; no faceted matrix. **Must work without JavaScript** — server-rendered filtered views, or progressive enhancement over a full list.

**Result changes are announced** for assistive technology (`../ux/ACCESSIBILITY_REQUIREMENTS.md` §3).

### Search (only past ~50 items)
A plain input. No instant-search-as-you-type unless it is genuinely fast and degrades cleanly.

---

## Rejected interactions

| Pattern | Why |
|---|---|
| Modal / lightbox for content | Breaks linking, breaks back-button, breaks reading |
| Expanding cards | Content should have a URL |
| Hover previews | No hover on touch; hides information |
| Custom cursors | Decoration |
| Drag interactions | No content requires spatial manipulation |
| Infinite scroll | Loses position; unreachable footer |
| Carousels | Hides content behind interaction |
| Command palette | **Tempting for this audience — rejected.** It is an in-group signal, but it is an interface pattern on a site of five to fifty documents. Solves nothing; adds JS and a keyboard-trap risk. The kind of cleverness that competes with content |
| Copy-code buttons | Only if code blocks exist and are long enough to warrant it |

**The command palette deserves its explicit rejection.** It is exactly the sort of detail that would delight a practitioner and would be, on a site this size, decoration wearing a technical costume — the failure mode the whole project is designed to avoid.

---

## Feedback

Modest and functional: visible focus states (never suppressed), immediate link affordance, clear filter state, confirmed copy actions, honest error states.

**No loading spinners.** A static site has nothing to wait for. A spinner would be the fake-state failure (Principle 7).

---

## The test

> **Would removing this interaction cost the visitor anything except convenience?**

If it costs *understanding*, keep it. If it costs *convenience*, weigh it. If it costs only *impressiveness*, remove it.

Applied consistently, this leaves: links, scrolling, filtering at volume, and search at scale. **That is the entire interaction inventory** — and it is the correct amount for a site whose value is what it says.
