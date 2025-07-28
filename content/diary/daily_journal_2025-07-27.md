+++
title = "Epoch Integration, USB Woes, and Foraged Tea"
template = "blog_post.html"
date = "2025-07-27"
+++

Today was primarily dedicated to integrating Epoch into Catacloud. As with most integration efforts, I encountered several unexpected discoveries.

### Epoch Cloud Integration Details

A significant part of the day involved implementing a new PostgreSQL-backed state store for persistent aggregate states, as I mentioned yesterday. This was quite straightforward, though I haven't yet added comprehensive transaction support. My goal is to ensure consistency across different traits, which will require further work. For now, I focused on getting a functional, albeit imperfect, solution in place.

I also introduced a command wrapper, analogous to our existing event wrappers. This wrapper encapsulates command data, optional credentials, and the expected aggregate version within a command struct. While I'm still evaluating its full utility given that aggregates manage diverse command types, the consistent struct with varying command data and optional credentials seems promising.

A major structural change involved re-conceptualizing aggregates as a specialized type of projection. My research, heavily emphasized separating projections (optimized for read-side operations) from aggregates (optimized for write-side operations). However, aggregates necessitate snapshots, which inherently function as a form of projection.

My initial approach, using distinct Projection and Aggregate traits, led to duplicated snapshot creation logic within the aggregate. To address this, my current approach separates event generation from projection. The aggregate trait now focuses solely on handling commands, enforcing business logic (determining if a command should proceed or return an error), and emitting events. It then offloads to the projection side, which takes these events, hydrates them onto the existing state, and returns the updated state to the aggregate for persistence alongside the events. This effectively reuses projection logic within the aggregate, making the aggregate a specialized projection. While this might raise an eyebrow or two among Event Sourcing purists, it maintains a clear separation of concerns: aggregates manage business logic and event emission, while projections handle state. I believe this solution is both effective and elegant, and it naturally allows for other types of projections that are not aggregates. I'm currently implementing this in Catacloud, and it appears to be working well, though some minor refinements may still be needed. This architectural shift consumed the majority of my day.

### MNT Reform USB Issue

On a less technical note, I unfortunately broke one of the USB ports on my MNT Reform. I'm unsure how it happened; I simply pulled out the microphone, and a piece of plastic from the USB port detached. I later found this plastic piece inside the microphone's USB connector. The port remains functional, but it's now missing the structural support for the USB pins. I'll need to add a dust cover or similar protection to prevent further damage. If I manage to find the plastic piece again, I might attempt to re-glue it. It was a peculiar incident, but thankfully, it's not a critical issue.

Despite this minor setback, I remain very satisfied with my computer. Its performance and feel are excellent, fulfilling all my expectations. I highly recommend it.

### Coffee and Tea Reflections

Beyond the main project work, I don't recall any other significant tasks today. However, I must mention a delightful coffee I had yesterday but didn't report. It's a truly excellent coffee from Majorelle, Napo, Ecuador. The tasting notes mention "Elderberry, persimmon, and lilac." I particularly enjoyed its distinct fermented aroma. It's a washed coffee, labeled "Washed Sidra." I'm not entirely sure what "Sidra" signifies in the processing, but it certainly carries the aromatic qualities of a naturally processed coffee. It's a very intriguing coffee, though I'm not entirely convinced by the proposed notes; I detected a hint of lavender and a slightly soapy finish. Nevertheless, it's a very pleasant coffee, characteristic of the quality I've come to expect from Sweven coffees, albeit quite expensive.

Currently, I'm enjoying a cup of tea made from mugwort flowers I foraged a few days ago during a walk on the Roman Road. I collected a good amount, dried them, and now brew them for tea. It's lovely, and my daughter enjoys it too.

### Future Plans

That pretty much summarizes my day. I anticipate writing a comprehensive blog post once the initial Epoch implementation is complete. This post will delve into the architectural decisions made and the rationale behind them, which I believe will make for an interesting read. That's all for today, I think.

