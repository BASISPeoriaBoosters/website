// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ical from 'ical.js';

export type CalendarData = {
    calendarName: string,
    calenderDescription: string,
    events: Event[]
}
export type Event = {
    id: string,
    startDate: Date,
    endDate: Date,
    title: string,
    description: string
}

export async function readCalendar(url: string, f = fetch): Promise<CalendarData> {
    const raw = await f("https://aj-proxies.vercel.app/calendar?url=" + encodeURIComponent(url))
        .then(response => response.text());

    const component = new ical.Component(ical.parse(raw));

    const data: CalendarData = {
        calendarName: component.getFirstPropertyValue("x-wr-calname"),
        calenderDescription: component.getFirstPropertyValue("x-wr-caldesc"),
        events: []
    };

    const events: ical.Component[] = component.getAllSubcomponents("vevent");

    events.forEach(eventComponent => {
        const event = new ical.Event(eventComponent);

        //console.log({summary: event.summary, startDate: event.startDate.toJSDate(), endDate: event.endDate.toJSDate(), raw: event})
        //event.component.getFirstPropertyValue("dtstamp").toJSDate()

        const startDate: Date = event.startDate.toJSDate();
        const endDate: Date = event.endDate.toJSDate();

        data.events.push({
            id: event.component.getFirstPropertyValue("uid"),
            startDate: startDate,
            endDate: endDate,
            title: event.summary,
            description: event.description
        })
    });

    return data;
}