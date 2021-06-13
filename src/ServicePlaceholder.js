const imitateLongTimeLoading = () => new Promise(
    // TODO: реализовать поведение для отмены запроса через abortController
    resolve => setTimeout(
        () => resolve(),
        1000
    )
);

export class Service {
    static async getEventsBetweenDatesGroupedByDay( startDate, endDate, abortController ) {
        await imitateLongTimeLoading();
        // В данной реализации никакие ошибки не могут быть возвращены,
        // Но сетевые запросы могут их вернуть и тут в сервисе все возможные
        // варианты ошибок обрабатываются и возвращаются, и уже задача программиста,
        // который вызвал метод сервиса, строить поведение, которое как-то
        // отреагирует на ошибку

        return {
            events: {
                "2021-05-31T00:00:00.000Z" : [
                    {
                        lessonName: "Пр. Английский",
                        lessonClassroom: "8 - 623",
                        lessonDateBegin: "2021-05-31T05:00:00.000Z",
                        lessonDateEnd:   "2021-05-31T07:00:00.000Z",
                    },{
                        lessonName: "Пр. Английский",
                        lessonClassroom: "8 - 623",
                        lessonDateBegin: "2021-05-31T08:00:00.000Z",
                        lessonDateEnd:   "2021-05-31T15:00:00.000Z",
                    },{
                        lessonName: "Пр. Английский2",
                        lessonClassroom: "8 - 623",
                        lessonDateBegin: "2021-05-31T16:00:00.000Z",
                        lessonDateEnd:   "2021-05-31T18:00:00.000Z",
                    },
                ],
                "2021-06-02T00:00:00.000Z" : [
                    {
                        lessonName: "Лек. Экономика",
                        lessonClassroom: "8 - 621",
                        lessonDateBegin: "2021-06-02T09:00:00.000Z",
                        lessonDateEnd:   "2021-06-02T09:30:00.000Z",
                    }, {
                        lessonName: "Пр. Физика",
                        lessonClassroom: "8 - 624",
                        lessonDateBegin: "2021-06-02T07:15:00.000Z",
                        lessonDateEnd:   "2021-06-02T08:15:00.000Z",
                    },
                ],
                "2021-06-03T00:00:00.000Z" : [
                    {
                        lessonName: "Пр. Экономика",
                        lessonClassroom: "8 - 621",
                        lessonDateBegin: "2021-06-03T11:15:00.000Z",
                        lessonDateEnd:   "2021-06-03T12:50:00.000Z",
                    }, {
                        lessonName: "Пр. Физика",
                        lessonClassroom: "8 - 624",
                        lessonDateBegin: "2021-06-03T07:15:00.000Z",
                        lessonDateEnd:   "2021-06-03T08:50:00.000Z",
                    },
                ],
                "2021-06-04T00:00:00.000Z" : [],
                "2021-06-12T00:00:00.000Z" : [
                    {
                        lessonName: "Пр. Английский",
                        lessonClassroom: "8 - 623",
                        lessonDateBegin: "2021-06-12T05:00:00.000Z",
                        lessonDateEnd:   "2021-06-12T07:00:00.000Z",
                    },{
                        lessonName: "Пр. Английский",
                        lessonClassroom: "8 - 623",
                        lessonDateBegin: "2021-06-12T08:00:00.000Z",
                        lessonDateEnd:   "2021-06-12T15:00:00.000Z",
                    },{
                        lessonName: "Пр. Английский2",
                        lessonClassroom: "8 - 623",
                        lessonDateBegin: "2021-06-12T16:00:00.000Z",
                        lessonDateEnd:   "2021-06-12T18:00:00.000Z",
                    },
                ],
            }
        }
    }
    static async getEventsForADay( dayDate ) {
        await imitateLongTimeLoading();
        // В данной реализации никакие ошибки не могут быть возвращены,
        // Но сетевые запросы могут их вернуть и тут в сервисе все возможные
        // варианты ошибок обрабатываются и возвращаются, и уже задача программиста,
        // который вызвал метод сервиса, строить поведение, которое как-то
        // отреагирует на ошибку
        return {
            events: []
        };
    }
    static getNotification() {
        return {
            notifications: [
                {
                    notificationType: "Добавлена новая пара!",
                    eventName: "Пр. Английский",
                    eventDateBegin: "2021-02-01T07:15:00.000Z",
                    eventDateEnd:   "2021-02-01T08:50:00.000Z",
                    eventClassroom: "8 - 621",

                },{
                    notificationType: "Изменение в паре!",
                    eventName: "Пр. Математика",
                    eventDateBegin: "2021-04-02T09:15:00.000Z",
                    eventDateEnd:   "2021-04-02T10:50:00.000Z",
                    eventClassroom: "8 - 623",

                },{
                    notificationType: "Добавлена новая пара!",
                    eventName: "Пр. Физика",
                    eventDateBegin: "2021-06-03T12:15:00.000Z",
                    eventDateEnd:   "2021-06-03T13:50:00.000Z",
                    eventClassroom: "8 - 624",

                },{
                    notificationType: "Изменение в паре!",
                    eventName: "Пр. Математика",
                    eventDateBegin: "2021-04-02T09:15:00.000Z",
                    eventDateEnd:   "2021-04-02T10:50:00.000Z",
                    eventClassroom: "8 - 623",

                },{
                    notificationType: "Добавлена новая пара!",
                    eventName: "Пр. Физика",
                    eventDateBegin: "2021-06-03T12:15:00.000Z",
                    eventDateEnd:   "2021-06-03T13:50:00.000Z",
                    eventClassroom: "8 - 624",

                },{
                    notificationType: "Изменение в паре!",
                    eventName: "Пр. Математика",
                    eventDateBegin: "2021-04-02T09:15:00.000Z",
                    eventDateEnd:   "2021-04-02T10:50:00.000Z",
                    eventClassroom: "8 - 623",

                },{
                    notificationType: "Добавлена новая пара!",
                    eventName: "Пр. Физика",
                    eventDateBegin: "2021-06-03T12:15:00.000Z",
                    eventDateEnd:   "2021-06-03T13:50:00.000Z",
                    eventClassroom: "8 - 624",

                },{
                    notificationType: "Изменение в паре!",
                    eventName: "Пр. Математика",
                    eventDateBegin: "2021-04-02T09:15:00.000Z",
                    eventDateEnd:   "2021-04-02T10:50:00.000Z",
                    eventClassroom: "8 - 623",

                },{
                    notificationType: "Добавлена новая пара!",
                    eventName: "Пр. Физика",
                    eventDateBegin: "2021-06-03T12:15:00.000Z",
                    eventDateEnd:   "2021-06-03T13:50:00.000Z",
                    eventClassroom: "8 - 624",

                },{
                    notificationType: "Изменение в паре!",
                    eventName: "Пр. Математика",
                    eventDateBegin: "2021-04-02T09:15:00.000Z",
                    eventDateEnd:   "2021-04-02T10:50:00.000Z",
                    eventClassroom: "8 - 623",

                },{
                    notificationType: "Добавлена новая пара!",
                    eventName: "Пр. Физика",
                    eventDateBegin: "2021-06-03T12:15:00.000Z",
                    eventDateEnd:   "2021-06-03T13:50:00.000Z",
                    eventClassroom: "8 - 624",

                },
            ]
        }
    }
}

