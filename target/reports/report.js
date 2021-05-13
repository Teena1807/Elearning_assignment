$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/Registration.feature");
formatter.feature({
  "line": 2,
  "name": "Signup Functionality For Elearning",
  "description": "",
  "id": "signup-functionality-for-elearning",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Elearning Registration and Compose Mail",
  "description": "",
  "id": "signup-functionality-for-elearning;elearning-registration-and-compose-mail",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on Elearning Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "click on Signup Link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Registration page should appear",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User Enters Mandatory Feild values \"\u003cfirstname\u003e\",\"\u003clastname\u003e\",\"\u003cemail\u003e\",\"\u003cusername\u003e\",\"\u003cpass\u003e\",\"\u003cconfirmpass\u003e\" in step",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User Clicks on Register",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User registration is successful \"\u003cfirstname\u003e\",\"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on Compose Link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User Enter \"\u003csend to\u003e\",\"\u003csubject\u003e\",\"\u003cmessage\u003e\" in step",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User Clicks on Send Message",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the message is sent \"\u003cpageTitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "signup-functionality-for-elearning;elearning-registration-and-compose-mail;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "username",
        "pass",
        "confirmpass",
        "send to",
        "subject",
        "message",
        "pageTitle"
      ],
      "line": 20,
      "id": "signup-functionality-for-elearning;elearning-registration-and-compose-mail;;1"
    },
    {
      "cells": [
        "Test7",
        "Test6",
        "Test8@gmail.com",
        "testt19",
        "password",
        "password",
        "aaa",
        "Test mail",
        "HELLO",
        "My Organization - My education"
      ],
      "line": 21,
      "id": "signup-functionality-for-elearning;elearning-registration-and-compose-mail;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3313002800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Elearning Registration and Compose Mail",
  "description": "",
  "id": "signup-functionality-for-elearning;elearning-registration-and-compose-mail;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on Elearning Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "click on Signup Link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Registration page should appear",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User Enters Mandatory Feild values \"Test7\",\"Test6\",\"Test8@gmail.com\",\"testt19\",\"password\",\"password\" in step",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User Clicks on Register",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User registration is successful \"Test7\",\"Test6\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on Compose Link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User Enter \"aaa\",\"Test mail\",\"HELLO\" in step",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User Clicks on Send Message",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the message is sent \"My Organization - My education\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_is_on_Elearning_Home_page()"
});
formatter.result({
  "duration": 6773203600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.click_on_Signup_Link()"
});
formatter.result({
  "duration": 4736963300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.registration_page_should_appear()"
});
formatter.result({
  "duration": 34861100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test7",
      "offset": 36
    },
    {
      "val": "Test6",
      "offset": 44
    },
    {
      "val": "Test8@gmail.com",
      "offset": 52
    },
    {
      "val": "testt19",
      "offset": 70
    },
    {
      "val": "password",
      "offset": 80
    },
    {
      "val": "password",
      "offset": 91
    }
  ],
  "location": "stepdefinition.user_Enters_Mandatory_Feild_values_in_step(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2567250700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Clicks_on_Register()"
});
formatter.result({
  "duration": 7236210100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test7",
      "offset": 33
    },
    {
      "val": "Test6",
      "offset": 41
    }
  ],
  "location": "stepdefinition.user_registration_is_successful(String,String)"
});
formatter.result({
  "duration": 170003800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_click_on_Compose_Link()"
});
formatter.result({
  "duration": 8712501900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aaa",
      "offset": 12
    },
    {
      "val": "Test mail",
      "offset": 18
    },
    {
      "val": "HELLO",
      "offset": 30
    }
  ],
  "location": "stepdefinition.user_Enter_in_step(String,String,String)"
});
formatter.result({
  "duration": 9717647000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_Clicks_on_Send_Message()"
});
formatter.result({
  "duration": 6282708400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Organization - My education",
      "offset": 30
    }
  ],
  "location": "stepdefinition.i_verify_the_message_is_sent(String)"
});
formatter.result({
  "duration": 39480500,
  "status": "passed"
});
formatter.after({
  "duration": 954604800,
  "status": "passed"
});
});