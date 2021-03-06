import React from "react";


export const SORT_TYPES = {
    CHRONOLOGICAL: "Chronological",
    REVERSE_CHRONOLOGICAL: "Reverse Chronological"
};

// object that represents an interval in the timeline with a start year `start` and end year `end`
export class Interval {
    constructor(startYear, endYear) {
        this.start = startYear;
        this.end = endYear;
    };
    toString() {
        return `${this.start} - ${this.end}`;
    }
};

export const TimelineContext = React.createContext({
    // represents the min and max year the timeline can be
    "minYear": 1910,
    "maxYear": 1925,
    "intervalLength": 5,
    // interval that the user selected from the timeline range
    "intervalSelected": new Interval(1910, 1920),
    "setIntervalSelected": () => {},
    // interval representing the {intervalLength}-year intervals that the timeline shows
    "timelineIntervals": [],
    "setTimelineIntervals": () => {},
    // represents the document to display in a modal, if there is no document to display then {}
    "documentModal": {},
    "setDocumentModal": () => {},
    // represents how the timeline is sorted
    "sortType": SORT_TYPES.CHRONOLOGICAL,
    "setSortType": () => {}
});
