Feature: Zip Code query in api Correios

        Scenario Outline: Valid Zip Code
             When search a valid zip code - <ZipCode>
             Then must bring the information linked to the street

        Examples:
                  | ZipCode  |
                  | 29143548 |



        Scenario Outline: Invalid Zip Code
             When search a invalid zip code - <ZipCode>
             Then should not bring the information linked to the street

        Examples:
                  | ZipCode  |
                  | 29143549 |