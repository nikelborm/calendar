import React from "react";

export function LoadingMessage({ dateStartingTheWeek, dateFinishingTheWeek }) {
    return (
        <>
            Загружаются мероприятия за период: <br />
            <b>
                {dateStartingTheWeek.toLocaleDateString("ru", { day: "2-digit", month: "long" })}
                {" - "}
                {dateFinishingTheWeek.toLocaleDateString("ru", { day: "2-digit", month: "long" })}
            </b>
        </>
    );
}
