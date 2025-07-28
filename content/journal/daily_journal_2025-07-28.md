+++
title = "Epoch Integration, Projection Puzzles, and Billing Blueprints."
template = "blog_post.html"
date = "2025-07-28"
+++

Today, I primarily focused on the Catacloud and Epoch integration, which progressed well. The only adjustment I had to do to Epoch was to include the aggregate ID in commands, as it was missing.

### Epoch Error Handling and Aggregate Design

I've realized that Epoch's error handling needs significant improvement. The current approach of ubiquitous `Box` for errors makes handling cumbersome and downcasting annoying. This is a critical area for future work, though the current implementation is minimally viable for my immediate needs.

I successfully implemented the `Job` aggregate and refined the db seeds to generate correct entities using events. This aggregate and events allows me to calculate the run duration for a user over an interval, providing total runtime in seconds across their jobs. I also added the specific job's runtime into the UI, calculated from its start and completion times, which will serve as the foundation for billing cpu usage.

### Job Files and Projection Challenges

A significant challenge emerged with job files, specifically their linking and unlinking. Job files are managed through an intermediary table, allowing file reuse across multiple jobs. My current system applies a command to a job, triggering link and unlink events. The UI unlinks all files from a job before relinking only the selected ones.

The core issue lies in a new projection for job files. This projection reacts to events from the job aggregate to hydrate file link states. However, the "unlink files" command is generic, unlinking all files for a given job ID. My current CRUD system, designed for single-entity operations (create, update, delete), doesn't elegantly handle events affecting multiple entities, like batch deletions or updates. This makes managing projections tied to specific IDs tricky when a generic command affects a collection of files.

I'm currently storing this state in Postgres and contemplating using the job ID as the identifier for the file state, essentially treating the state as a list of file IDs. While this feels a bit hacky and might impact performance, it's a direction I'm exploring. I need to devise a more flexible Epoch model to accommodate events that create, update, or delete multiple entities without forcing users to implement specialized multi-entity methods.

### Future Work: Storage Billing

Next, I need to finalize the job files implementation. Subsequently, I'll focus on calculating "gigabytes per hour" or "gigabytes-hours" for file storage. This metric will be crucial for billing users for storage consumption. The challenge here is how to attribute storage cost for input files shared across multiple jobs. The cost might need to be divided among jobs that utilize the same file, or perhaps only consider files not shared by other users.

### Conclusion

Overall, it was a productive day with some significant progress and a clear understanding of immediate and future challenges. I'm quite tired but remain focused on the "money part" of the project, which is vital for its completion. There's still a lot to do.

