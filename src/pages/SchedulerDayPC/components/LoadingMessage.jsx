import React from "react";

export function LoadingMessage({ dayDate }) {
    return (
        <>
            Загружаются мероприятия на<br />
            <b>
                {dayDate.toLocaleDateString("ru", { weekday: "long", day: "2-digit", month: "long" })}
            </b>
        </>
    );
}
