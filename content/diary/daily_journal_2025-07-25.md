+++
title = "A Day of Tech Tinkering and Deep Dives"
template = "blog_post.html"
date = "2025-07-25"
+++

Today was a bit of a whirlwind, starting with me waking up late – still not entirely sure what happened there! Despite the slow start, I managed to dive into a few interesting projects.

My MNT reform's Wi-Fi coverage has been bothering me, so I spent some time looking into antennas. I've got an external antenna coming, which means I'll need to drill a hole in one of the side panels. The hope is that by combining an internal antenna with this new external one, I'll finally get the coverage I need.

Then there's the MNT reform's unbalanced batteries. It's been frustrating having to stay constantly connected because one battery is full while the others are empty. Because one of the batteries is full, the charge controller won't charge the remaining ones. And when I disconnect power, the system to shuts down soon after. I've ordered a charger that should arrive early next week, which will hopefully allow me to charge all the bateries to the same level. 

My thoughts also drifted to UXN, the VM. I'm starting to seriously consider using it as the embedded computer system within a programming-puzzle video game I'm conceptualizing. The idea is that players would program in UXN to solve in-game challenges. I was exploring different concepts, like changing the file system from a device-based one to a block system, perhaps even borrowing ideas from Forth. It was a bit of a rabbit hole, but an interesting one.

Work for EBI also took up a good chunk of my day. I pushed some fixes to a GFF3 implementation PR I had open. The main change was shifting how directives are handled: instead of a general list, annotations now have specific directives tied to them, with separate directives for the entire GFF3 file. It was a bigger change than I anticipated, requiring some refactoring of the directive's location.

I also ran a test on optimizing FASTA file reads. My initial thought was to trim down the base representation to 2 bits per base, but then I remembered the character for unrecognized bases, which forces a 3-bit representation. Further research led me to "masking," which I need to look into more, as it might push the bit count to 4. This would significantly reduce our anticipated 75% size reduction to a mere 50%, which isn't as extraordinary, but still good given the terabytes of FASTA files we have at EBI. The streaming support is crucial for these massive files, especially when we need to transform them on the fly without loading the entire file into memory.

Finally, my afternoon was dedicated to Epoch, the event-sourcing library I'm building for Catallactical. I finally added the `aggregate` trait, and it seems to be working well! I also implemented support for optimistic concurrency and conflict resolution. Tomorrow, I'll be writing an example using this new trait, and then I'll start integrating it into the Catacloud system – the main reason I'm developing Epoch.

All in all, a productive day filled with technical challenges and progress. Let's see what tomorrow brings!

