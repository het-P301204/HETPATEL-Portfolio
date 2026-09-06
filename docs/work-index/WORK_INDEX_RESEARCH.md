# Work / Investigation Index — Research

**Date:** 2026-08-15 (Phase 5F)

One question: **how do people present a body of work without generic cards, and what makes a work index immediately distinguishable from a blog archive?**

Method key: `[F]` fetched and read this session · `[C]` carried from the Phase 1 corpus · `[S]` search-derived practitioner consensus.

---

## 1. The finding — a date span is a portfolio signal; a date point is a publication signal

**Caruso St John Architects** `[F]` — an austere, highly regarded practice whose project index is the clearest example found of a body of work presented as a record.

Entries, verbatim:

> **Royale Belge** · Brussels, Belgium · `2019–2023`
> **Neue Pinakothek** · Munich, Germany · `2016–present (under construction)`
> **Newport Street Gallery** · London, United Kingdom · `2004–2015`

**This is the structural answer to the date question Het's brief asks.**

A **span** describes the work: when it ran, how long it took, whether it is still running. A **point** describes a post: the day it was published. The same digits carry opposite meanings depending on which they are.

`2016–present (under construction)` is doing something else worth noticing: it merges **date and status into one legible fact**. Het's system already has the ingredients — `Started`, `Published`, `Status`.

Two further observations:

- **Default ordering is "Featured", not "Newest first."** Newest-first is offered as an option among four. A curated default is a portfolio signal; a chronological default with no alternative is an archive.
- **Filters are by Status, Type and Programme** — properties of the work. Not by date, not by author.

**The uncomfortable part, recorded honestly:** Caruso St John uses **cards with thumbnails**, and still reads unmistakably as a body of work. **The card is not the discriminator.** What makes it a portfolio is that every piece of metadata describes the work rather than the publishing of it.

This matters for Het in two directions. It means the no-cards constraint is not what will save this page — the metadata semantics will. And it means a text index can succeed on exactly the same basis.

---

## 2. The counter-example — a serious research org whose index reads as a publication

**PortSwigger Research** `[F]`. World-class security research, and its index is:

- **cards**, in "Featured Research" and **"Latest Research Articles"**
- each entry: **title + a single prominent publication date** — *"CSS: the bomb inside your inbox — 06 August 2026"*
- **chronological, newest first**
- thematic entry exists but as a separate "Core Topics" navigation, not as the index's structure

By the 5E instrument this is a publication, and appropriately so — PortSwigger Research *is* a publication. Phase 1 recorded its multi-axis IA as a strength and that stands; what 5F adds is that **its index structure is exactly what Het's must not be**, because Het is not publishing research, he is showing work.

The two signals doing the damage are the word **"Latest"** and the **single date**. Neither is a card.

---

## 3. James Kettle, re-read for the index question `[C]` `[F]`

Research grouped under **HTTP Request Smuggling (7) · Web Cache Poisoning (4) · Tools & automation (5) · Other highlights (8) · How I approach research (6)**, with a chronological list demoted to **"Misc"** at the bottom.

**The chronological list still exists — it is just not the structure.** This is the pattern worth stealing: chronology as a fallback ordering inside a thematic frame, never as the frame itself.

Phase 1 called this "the single most important navigational idea found" and noted the property that matters most here: **it is a structural argument available to someone with no seniority.** Grouping by kind of problem asserts a domain; a dated list asserts only that you have been busy.

**Blocked at launch.** Three investigations do not group. `INVESTIGATION_INDEX.md` puts domain grouping at ~15 items; 5E put thematic grouping at ~8. Either way it is not now. **The index must be shaped so grouping can be switched on later without redesign.**

---

## 4. Architecture practice conventions `[S]`

The convention across practice sites is a **structured record per project**: name, location, year/span, typology, status — the same fields for every item, without exception. Filtering by category is standard at volume.

**The transferable principle:** uniformity of the record is what makes a list read as a body of work. Every item answers the same questions in the same order, so the reader learns the shape once and then scans. A blog archive varies — some posts have images, some have tags, some have subtitles.

**What must not transfer:** the imagery. Architecture is a visual discipline and its thumbnails carry real information. Het's work is reasoning; a screenshot of a terminal would be decoration, and `ARTIFACT_MODEL.md` §4 already forbids it.

---

## 5. The discriminator, extended for the index

The 5E instrument covered pages. This extends it to lists:

| Signal | Blog archive | Body of work |
|---|---|---|
| Date form | **single point** ("06 August 2026") | **span** ("2019–2023", "2026–") |
| Date prominence | leads, or sits under the title | trails, with the other record fields |
| Default order | newest first | curated or thematic; chronology available, not structural |
| Ordering language | "Latest", "Recent", "Archive" | none — the order is just an order |
| Per-item metadata | author, read time, category, published | **status, origin, span, role** |
| Item summary | excerpt, truncated with an ellipsis | **a written framing sentence** |
| Record uniformity | varies by post | **identical fields, every item** |
| What the title names | an article | **a piece of work** |

**The single most useful line in this table is the summary row.** An excerpt is the first N characters of the body; a framing sentence is written for the index. `INVESTIGATION_INDEX.md` already requires the latter and calls it "the index's entire utility". The research supports that: excerpts are the strongest archive signal after dates, because they exist only where there is a stream of prose to truncate.

---

## 6. What works · generic · overused · relevant · rejected

**Works.** Uniform structured records · date as span · status as part of the record · thematic grouping with chronology demoted · a written framing line · filters by properties of the work.

**Generic.** Card grids · thumbnails · "Read more" · category pills · author bylines on a single-author site · tag clouds.

**Overused.** Reverse-chronological as the only order · "Latest" headings · read-time estimates · excerpt fades · hover-lift cards · masonry layouts.

**Relevant to Het.** The span (Caruso St John) · thematic grouping deferred but designed for (Kettle) · framing sentence (5B) · status as a colourless word (5A) · origin as the field that separates professional from lab work, which is his single most valuable distinction.

**Rejected.** PortSwigger's index structure — right for a publication, wrong here · architecture thumbnails — his work is not visual · filters at three items — a filter over three advertises scarcity · anything that makes repository count legible as a number.

---

## 7. The one thing the research does not settle

Whether a **date span helps at launch volume.** Every current investigation would read `2026`, which is uniform and therefore uninformative — the span's value is entirely in a corpus that has aged.

Caruso St John's spans work because the practice has thirty years of them. Het has eight months.

**This is a genuine open question and is tested in the prototype rather than assumed** — see `WORK_INDEX_SCALABILITY.md`.
