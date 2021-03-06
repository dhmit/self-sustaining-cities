"""
Models for the Self-Sustaining Cities web app.
"""

import json
import os
from django.db import models


class Location(models.Model):
    """
    Location model
    Fields:
        `name`: name of the location
    """
    name = models.CharField(max_length=128)


class Person(models.Model):
    """
    Person model
    Fields:
        `first_name`: first name of a person

        `last_name`: last name of a person

        `ethnicity`: ethnicity of a person, optional field

        `date_of_birth`: date of birth

        `country_of_origin`: representation of country of origin
    """
    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=32)
    ethnicity = models.CharField(max_length=32, blank=True)
    date_of_birth = models.DateField(verbose_name="Date of Birth: YYYY-MM-DD")

    dir = os.path.dirname(__file__)
    abs_file_path = os.path.join(dir, "data/country_codes.json")

    # Country Data obtained from https://datahub.io/core/country-list#data
    with open(abs_file_path, "r", encoding="utf8") as country_code_file:
        data = json.load(country_code_file)
        COUNTRY_CODES = [(country['Code'], country['Name']) for country in data]

    country_of_origin = models.CharField(max_length=2,choices=COUNTRY_CODES)


class Event(models.Model):
    """
    Event model
    Fields:
        `name`: name of event

        `date`: date of event

        `locations`: locations this event took place, manytomany link to Location model

        `people`: people that are related to this event, manytomany link to Person model
    """
    name = models.CharField(max_length=128)  # maybe make this unique?
    date = models.DateField(verbose_name="Event Date: YYYY-MM-DD")
    locations = models.ManyToManyField(Location)
    people = models.ManyToManyField(Person)
