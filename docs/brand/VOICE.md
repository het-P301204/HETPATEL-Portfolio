# Voice

**Date:** 2026-08-14 (Phase 2) · **Status:** One recommended, not finalised. Het chooses.

---

## Why voice is a strategic decision, not a styling one

Phase 1 measured the current saturation threat, and it is not cyberpunk aesthetics — it is **corporate sameness with no authorial presence.** The strongest peer portfolios avoid hacker clichés entirely and are still forgettable; one was characterised as achieving *"intentional genericization through absence of personality markers."*

Voice is therefore the scarce quality. It is also the one thing a template cannot supply and a generator reproduces poorly.

---

## Voice direction 1 — PLAIN TECHNICAL

**Character:** A competent practitioner writing for other practitioners. Deliberately unshowy.
**Sentence style:** Declarative, medium length, no rhetorical devices.
**Technical depth:** High. Assumes the reader knows the domain.
**Humour:** None.
**Formality:** Formal but not corporate.
**First person:** Sparse — mostly structural ("I tested…", "I concluded…").

**Example headline:** *Comparing declared firewall rules against observed traffic*

**Example description:**
> A tool that parses a declared firewall ruleset and compares it against observed flow records to identify rules that never match traffic and traffic that matches no rule. Detects rule drift in environments where change control is inconsistent. Does not evaluate whether a matching rule is correctly scoped.

**Risk:** Indistinguishable from good documentation. Credible but not memorable — the Trail of Bits register works because institutional weight supplies what the prose withholds. Het has no such weight.

---

## Voice direction 2 — REASONED FIRST PERSON ⭐

**Character:** Someone thinking on the page — showing the route, not just the destination.
**Sentence style:** Varied. Short sentences for conclusions, longer for reasoning.
**Technical depth:** High, but reasoning is explained rather than assumed.
**Humour:** Rare and dry. Never a joke for its own sake.
**Formality:** Professional but relaxed. Contractions allowed.
**First person:** Central. The reasoning is the content, so "I" is structural.

**Example headline:** *Which firewall rules are actually doing anything?*

**Example description:**
> I kept seeing rulesets where nobody could say which rules still mattered. So I wrote something that parses the declared rules, compares them against observed flows, and reports two things: rules that never match, and traffic that matches nothing.
>
> The second one turned out to be the interesting half. Unmatched traffic usually means a default-allow somewhere upstream, which is a different problem from the one I set out to find.
>
> It doesn't tell you whether a matching rule is correctly *scoped* — a rule can match constantly and still be far too broad. That's the harder question and I haven't solved it.

**Risk:** Slips into rambling if undisciplined. Requires actual reasoning to exist — cannot be faked. Poorly executed, it reads as a diary.

---

## Voice direction 3 — WARM EXPLANATORY

**Character:** A generous explainer. Assumes the reader wants to understand, not just evaluate.
**Sentence style:** Conversational, guiding, second-person asides.
**Technical depth:** High but scaffolded.
**Humour:** Light and frequent.
**Formality:** Low.
**First person:** Frequent, alongside "you".

**Example headline:** *Firewall rules lie, and here's how to catch them*

**Example description:**
> Here's a thing nobody tells you about firewall rulesets: after a couple of years, nobody knows which rules still do anything. They accumulate. People are afraid to delete them.
>
> So I built a small tool that reads your declared rules, watches what traffic actually does, and tells you which rules have gone quiet — plus, more worryingly, which traffic isn't matching any rule at all.
>
> Fair warning: it won't tell you if a rule is too *broad*. A rule can match all day and still be wide open. That's a harder problem.

**Risk:** Reads as content marketing. The "here's a thing nobody tells you" construction is heavily used by technical influencers and would undercut the seriousness the GRC audience needs. **Also a poor fit for audit-adjacent readers.**

---

## Voice direction 4 — TERSE ANALYTICAL

**Character:** Clipped, high-density, almost note-form.
**Sentence style:** Very short. Fragments permitted.
**Technical depth:** Very high. No scaffolding.
**Humour:** None.
**Formality:** Neutral.
**First person:** Minimal.

**Example headline:** *Firewall rule drift: declared vs observed*

**Example description:**
> Parses declared rules. Correlates with observed flows. Reports two classes: rules with no matches, traffic with no rule.
>
> Second class more useful. Usually indicates upstream default-allow.
>
> Does not assess rule scope. Broad rules match constantly and look healthy.

**Risk:** The austerity trap identified in Phase 1 — reads as confident from a known name, unfinished from an unknown one. Also strips personality entirely, which is the specific failure mode the brand exists to avoid.

---

## Comparison

| | 1 Plain Technical | 2 Reasoned First Person | 3 Warm Explanatory | 4 Terse Analytical |
|---|---|---|---|---|
| Credibility | 8 | 8 | 5 | 7 |
| Personality | 3 | **9** | 8 | 2 |
| Clarity | 8 | 8 | **9** | 6 |
| Technical maturity | 8 | **8** | 5 | 8 |
| Memorability | 3 | **8** | 7 | 4 |
| AI-genericity resistance | 4 | **9** | 3 | 6 |
| GRC-audience fit | 8 | **8** | 3 | 7 |
| **Total** | 42 | **58** | 40 | 40 |

**On AI-genericity:** direction 2 scores highest because its structure — an admitted false start, a mid-course discovery, an unresolved limitation — is the shape of actual experience. Generated text defaults to confident, tidy, resolved. Direction 3 scores lowest: "here's a thing nobody tells you" is a hallmark construction of generated and influencer content alike.

---

## Recommendation

### VOICE DIRECTION 2 — REASONED FIRST PERSON

It is the only direction that carries the brand promise. If the site's premise is *"every piece of work shows its reasoning and states its limits,"* the prose must contain reasoning — and reasoning without a first person is unnatural.

It also scores highest on the two qualities Phase 1 identified as scarce: personality and resistance to generated-text sameness.

**Discipline required — the failure modes are real:**
1. **No reasoning theatre.** If a decision was obvious, say so. Manufactured deliberation is worse than none.
2. **Limits stated as engineering judgment, never apology.** "I haven't solved it" — not "sorry, this is probably bad."
3. **Length matched to substance.** A small investigation gets three sentences.
4. **No teaching register.** Het is not yet positioned to instruct. He reports what he worked out.
5. **Vary the shape.** If every piece runs setup → discovery → limitation, it becomes a template and loses the advantage.

**A useful borrowing from direction 1:** headings and summaries should be plain-technical, so the site scans professionally. The reasoned voice belongs in the body. This keeps recruiters oriented while giving practitioners depth.

---

*All examples above are **fictional** and written solely to compare voices. The firewall tool does not exist and must never appear as Het's work.*
