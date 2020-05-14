Feature: Google Search

  As an everyday user
  I want to search for cucumber-js documentation on google.com
  So that I can read them for my automation testing

  @sample
  Scenario: Google Search for cucumber-js documentation
    Given User is in the Google webpage
    When User searches for "cucumber-js documentation"
    Then User should see "cucumber.io" in the search results