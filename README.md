# Project Feedreader testing - FEND

In this project I was given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and I was left with an application with an incomplete test suite what I had to finish.

## What did I learn?

I learnt how to use Jasmine to write a number of tests against a pre-existing application.

## Run the app on your local machine

Download/clone this repository and open index.html in your browser

## Tests I wrote

A test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.

A test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

A test that ensures the menu element is hidden by default under "The Menu" test suite.
Test that ensures the menu changes visibility when the menu icon is clicked.

A test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

A test that ensures when a new feed is loaded by the loadFeed function that the content actually changes
