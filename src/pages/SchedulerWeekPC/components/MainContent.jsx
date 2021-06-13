import React from "react";
import eachDayOfInterval from "date-fns/eachDayOfInterval";
import sub from "date-fns/sub";

import { HourMarkersColumn } from "../../../components/HourMarkersColumn";
import { CurrentMomentRedLine } from "../../../components/CurrentMomentRedLine";
import { HourLines } from "../../../components/HourLines";
import { DayColumn } from "../../../components/DayColumn";

const getGreenWichMidnightISOString = date => sub(
    date,
    {
        minutes: date.getTimezoneOffset()
    }
).toISOString();

export function MainContent({ dateStartingTheWeek, dateFinishingTheWeek, eventsInSelectedWeekGroupedByDay }) {
    return (
        <>
            <HourMarkersColumn/>
            <HourLines/>
            { eachDayOfInterval( { start: dateStartingTheWeek, end: dateFinishingTheWeek } ).map( ( dayDate, index ) => (
                <DayColumn
                    key={ dayDate.toISOString() }
                    dayDate={ dayDate }
                    columnNumber={ index + 2 }
                        // одну единицу добавили чтобы из последовательности от 0 до N превратить
                        // в последовательность от 1 до N + 1, так как в гридах отсчёт для задания
                        // позиционирования идёт с 1го. а потом ещё одну единичку, потому что первая
                        // колонка занята HourMarkersColumn и нужно все DayColumn сдвинуть
                    events={ eventsInSelectedWeekGroupedByDay[
                        getGreenWichMidnightISOString( dayDate )
                    ] || [] }
                        // dayDate это дата c временем в полночь, но в текущем часовом поясе
                        // Сервер присылает даты ключи в универсальном гринвиче
                        // Мы создаём дату полночь в гринвиче, на основе локальной даты полночи
                />
            ) ) }
            <CurrentMomentRedLine/>
        </>
    );
}
