### Wizcode Music Aapp - Addons

There are few intersting features we could add on top of the standard behaviour. i.e. infinite scroll, lazy loading for images, sorting albums based on album or artist, pagination. I will focus on Infinite Scroll.

## Infinite Scroll

The first feature I would add is infinite scroll to improve a user experience.

# Code Change Needed

1. First We would add the test to render the page and check if the first batch of albums is loaded.
   We also would check that second batch of albums is not rendered.
   Then we would imitate scroll using react testing library and after awaiting results we would check if second batch of albums is rendered.
1. Second thing would be to make necessary changes to our code fetchAlbums to accomodate for offset to only fetch specific amounts of albums
1. After that we would need to update useAlbums hook to change how we use react query. React Query exposes for us a useInfiniteQuery hook which we can use to easily implement fetching data and also cache the queries.
1. The last set of changes would need to be done in AlbumList. We would need to utilize here updated useAlbums hook. Create a state wehere we can keep page number to clalculate offset. We also would need to either add handler to scheck position of the scroll or maybe an intersection observer to check if we reached the point to automatically load more results.
