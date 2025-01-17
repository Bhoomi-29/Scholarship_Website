# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

# from typing import Any, Text, Dict, List
#
# from rasa_sdk import Action, Tracker
# from rasa_sdk.executor import CollectingDispatcher
#
#
# class ActionHelloWorld(Action):
#
#     def name(self) -> Text:
#         return "action_hello_world"
#
#     def run(self, dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
#
#         dispatcher.utter_message(text="Hello World!")
#
#         return []
from rasa_sdk import Action
from rasa_sdk.events import SlotSet

class ActionProvideScholarshipInfo(Action):
    def name(self):
        return "action_provide_scholarship_info"

    def run(self, dispatcher, tracker, domain):
        user_type = tracker.get_slot("user_type")
        
        if user_type == "student":
            dispatcher.utter_message(text="As a student, you can apply for various scholarships. Some popular options are merit-based scholarships, need-based scholarships, and diversity scholarships.")
        elif user_type == "institution":
            dispatcher.utter_message(text="Institutions can partner with scholarship organizations to offer institutional scholarships to students. Please provide more details about your institution.")
        elif user_type == "officer":
            dispatcher.utter_message(text="Officers in education can provide information on government-backed scholarships and assist students in applying. How can I assist you with that?")
        else:
            dispatcher.utter_message(text="I can help students, institutions, or education officers with scholarship information. Please tell me your role.")
        
        return []
