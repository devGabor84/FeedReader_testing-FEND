/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(
  (function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe("RSS Feeds", function() {
      /* This is our first test - it tests to make sure that the
       * allFeeds variable has been defined and that it is not
       * empty.
       */
      it("are defined", function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
      });

      /* Test that loops through each feed
       * in the allFeeds object and ensures it has a URL defined
       * and that the URL is not empty.
       */
      it("URLs are defined and not empty", function() {
        for (let feed of allFeeds) {
          expect(feed.url).toBeDefined();
          expect(feed.url.length).not.toBe(0);
        }
      });

      /* Test that loops through each feed
       * in the allFeeds object and ensures it has a name defined
       * and that the name is not empty.
       */
      it("feeds name are defined and not empty", function() {
        for (let feed of allFeeds) {
          expect(feed.name).toBeDefined();
          expect(feed.name.length).not.toBe(0);
        }
      });
    });

    /* Test suite named "The menu" */
    describe("The Menu", function() {
      /* Test that ensures the menu element is
       * hidden by default.*/
      it("is hidden by default", function() {
        const body = document.querySelector("body");

        expect(body.classList.contains("menu-hidden")).toBe(true);
      });

      /* Test that ensures the menu changes
       * visibility when the menu icon is clicked.*/
      it("changes visibility when clicked on menu icon", function() {
        const body = document.querySelector("body");
        const menuBtn = document.querySelector(".menu-icon-link");

        menuBtn.click();
        expect(body.classList.contains("menu-hidden")).toBe(false);

        menuBtn.click();
        expect(body.classList.contains("menu-hidden")).toBe(true);
      });
    });

    /* Test suite named "Initial Entries" */

    describe("Initial Entries", function() {
      /* Test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.*/

      beforeEach(function(done) {
        loadFeed(0, function() {
          done();
        });
      });

      it("there should be at least a single .entry element in the .feed container", function(done) {
        const entries = document.querySelectorAll(".feed .entry");
        expect(entries.length).not.toBe(0);
        done();
      });
    });

    /* Test suite named "New Feed Selection" */

    describe("New Feed Selection", function() {
      /* Test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.*/

      let firstFeedEntries = [];
      let secondFeedEntries = [];

      beforeEach(function(done) {
        loadFeed(0, function() {
          const entriesOne = document.querySelectorAll(".feed .entry");
          for (let entryFirstFeed of entriesOne) {
            firstFeedEntries.push(entryFirstFeed.innerText);
          }
          loadFeed(2, function() {
            const entriesTwo = document.querySelectorAll(".feed .entry");
            for (let entrySecondFeed of entriesTwo) {
              secondFeedEntries.push(entrySecondFeed.innerText);
            }
            done();
          });
        });
      });

      it("when a new feed is loaded the content actually changes ", function(done) {
        firstFeedEntries.forEach(function(entries, index) {
          expect(entries === secondFeedEntries[index]).toBe(false);
        });

        done();
      });
    });
  })()
);
