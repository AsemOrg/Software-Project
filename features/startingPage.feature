Feature: Starting Page

    Scenario: Registerion new account
        Given the user is in the startng page
        When the user enters "1- Register"
        Then transfere him to the registerion page
        
    Scenario: Login to your account
        Given the user is in the startng page
        When the user enters "2- Login"
        Then transfere him to the login page

    Scenario: Exit
        Given the user is in the startng page
        When the user enters "3- Exit the program"
        Then exit the program

    Scenario: Invalid input
        Given the user is in the startng page
        When the user enters any invalid integer input
        Then display message "invalid input"
        And reture to the staring page