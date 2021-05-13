
Feature: Signup Functionality For Elearning
  

  @Sanity
  
  Scenario Outline: Elearning Registration and Compose Mail
    Given User is on Elearning Home page
    When click on Signup Link
    And Registration page should appear
    And  User Enters Mandatory Feild values "<firstname>","<lastname>","<email>","<username>","<pass>","<confirmpass>" in step
    And  User Clicks on Register  
     And  User registration is successful "<firstname>","<lastname>"
     And  User click on Compose Link
    And User Enter "<send to>","<subject>","<message>" in step
    And  User Clicks on Send Message  
    Then I verify the message is sent "<pageTitle>"
    
    Examples:
   |firstname|lastname|email             |username  |pass       |confirmpass|send to    |subject        |message     |pageTitle											|
   |Test7    |Test6   |Test8@gmail.com   |testt19   |password   |password   | aaa       |Test mail      |  HELLO     |My Organization - My education |
   