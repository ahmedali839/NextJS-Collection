# Notes:

## Revalidation:

### In Next.js, revalidation is essentially a process that allows you to update static content on the fly. When you use Incremental Static Regeneration (ISR), you can set a revalidation time for your pages. This means that the page is generated at build time and then can be updated in the background after a certain period.

### If you don’t use revalidation, then your content might become stale over time. You’d either have to rebuild the entire site to update it or rely on client-side fetching, which might not be as efficient or performant.

## Files:

### Incremental Static Regeneration (ISR) is specifically designed for static pages. With ISR, you generate the page at build time, and then you can set a revalidation interval. This means the page will be updated automatically after a certain time, ensuring that users get fresh content without needing a full rebuild. So, revalidation is a core part of ISR.

### Server-Side Rendering (SSR), on the other hand, generates the page on each request. This means the content is always fresh because it’s fetched from the server every time a user makes a request. With SSR, you don’t necessarily need revalidation in the same sense because the data is always up-to-date on each request.

### Static Site Generation (SSG) is about generating pages at build time, and if you don’t use ISR, the page remains static until you rebuild the entire site. In that scenario, revalidation isn’t built-in unless you incorporate ISR.

### on /pending-state: using displaying pending state(useActionState, startTransition, another type of loading UI, fetching data from server)

### Q) My Next.js 'like' counter correctly increments to 5, but resets to 0 visually on a browser refresh. However, clicking 'like' again resumes the count from the previous value (jumping from 0 to 6). Why is the state preserved on the backend despite the browser refresh? Conversely, why does restarting the server (npm run dev) completely wipe this data back to 0? (v-imp)

### Ans) 1. Why it resets visually to 0: Refreshing the page wipes the browser's temporary memory (State). The component re-renders using your hardcoded default initialLikes={0} because the client has no way to know the server's current value until it asks again.

### 2. Why it remembers the count (jumps to 6): The likeCount variable is stored in Server RAM (global scope), which is separate from the browser. Since the server process kept running during your refresh, it preserved the value 5 in memory and simply incremented it to 6 when you clicked.

### 3. Why npm run dev wipes it: Restarting the dev server kills the current Node.js process. This completely clears the server's RAM, destroying the likeCount variable and resetting it to 0.
