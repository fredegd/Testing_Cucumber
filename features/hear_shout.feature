Feature: Hear Shout
   Shouty allows users to "hear" other users "shouts" as long as they are close enough to each other.
    
    To do:
    - Implement the Shouty class
    - Implement the Shouty#shout method
    - Implement the Shouty#hear method
    - Implement the Shouty#location method
    - Implement the Shouty#move_to method
    - Implement the Shouty#distance_to method
    - Implement the Shouty#message_heard method
    - Implement the Shouty#messages_heard_by method
Rule:  Shouts can be heard by other users

    Scenario: Listener and Shouter
    Given a person named Lucy
    And a person named Sean
    When Sean shouts "free bagels at Sean's"
    Then Lucy hears Sean's message

 Scenario: Listener is within range
 Given Lucy is Located 15 metres from Sean 
 When Sean shouts "free bagels at Sean's"
 Then Lucy hears Sean's message

 Scenario: Listener hears a different message
    Given Lucy is Standing 15 metres from Sean
    When Sean shouts "Free coffee!"
    Then Lucy hears Sean's message