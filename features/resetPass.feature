Feature: reset Password

    Scenario: Enter valid email 
        Given the user logged into "Reset Password" page
        And enter a valid email 
        When the user click on submit button
        Then send code to the user email

    Scenario: Enter invalid email
        Given the user logged into "Reset Password" page
        And enter a invalid email 
        When the user click on submit button
        Then cancel operation 
        And display massege "invalid email"

    Scenario: Enter verification code
        Given the user logged into "Reset Password" page
        And recived a code to reset him Password
        When the user enter the right verification code
        Then the system make the user write the new Password 

    Scenario: Enter wrong verification code
        Given the user logged into "Reset Password" page
        And recived a code to reset him Password
        When the user enter the wrong verification code
        Then the system display "error: wrong code entered"

    

    Scenario: valid reset operation
    Scenario: invalid reset operation

    Scenario: exit 
        Given user is in the "Reset Password" page
        When the user click on exit button
        Then redirect him to login page
