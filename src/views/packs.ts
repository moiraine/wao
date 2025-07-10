export enum Days {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
}

export enum Category {
    DAILY,
    WEEKLY,
    MONTHLY,
    LUCKY,
    TWICEAWEEK,
    EVENTS,
}

export enum Events {
    PONIES,
    GODDESS_BLESSING,
    LUCKY_WHEEL,
    MICHAEL_ARCHANGEL,
    MINE_TREASURE_HUNT,
    PEOPLES_SPENDING_SPREE,
    HADES,
    MARBLES,
    FARPLANE_INVASION,
    LOST_TREASURE,
    FRONTIER_WAR,
    BRAVE_VALLEY,
    FORTRESS_WAR,
    JOURNEY_OF_MIRACLES,
    DOUBLE_LUXURY_GIFT,
    CAMEL,
    JOKER,
    WAR_CHAPTERS,
    TREASURE_PATH,
    CANDY
}

export const packsData = [
    {
        "name": "athena",
        "deals": [
            {
                category: Category.DAILY,
                days: [Days.TUESDAY],
                levels: [
                    { level: 1, price: 2.99, pieces: 2 },
                    { level: 2, price: 4.99, pieces: 3 },
                    { level: 3, price: 6.99, pieces: 4 },
                    { level: 4, price: 14.99, pieces: 8 },
                    { level: 5, price: 29.99, pieces: 15 },
                    { level: 6, price: 59.99, pieces: 27 },
                ],
            }
        ]
    },
    {
        "name": "laevateinn",
        "deals": [
            {
                category: Category.TWICEAWEEK,
                levels: [
                    { level: 1, price: 4.99, pieces: 1 },
                    { level: 2, price: 9.99, pieces: 2 },
                    { level: 3, price: 19.99, pieces: 4 },
                    { level: 4, price: 29.99, pieces: 5 },
                    { level: 5, price: 49.99, pieces: 7 },
                    { level: 6, price: 99.99, pieces: 9 },
                ],
            },
            {
                category: Category.WEEKLY,
                levels: [
                    { level: 1, price: 1.99, pieces: 1 },
                    { level: 2, price: 4.99, pieces: 2 },
                    { level: 3, price: 9.99, pieces: 4 },
                    { level: 4, price: 14.99, pieces: 6 },
                    { level: 5, price: 19.99, pieces: 7 },
                    { level: 6, price: 49.99, pieces: 14 },
                ],
            },
            {
                category: Category.DAILY,
                levels: [
                    { level: 1, price: 4.99, pieces: 1 },
                    { level: 2, price: 9.99, pieces: 2 },
                    { level: 3, price: 19.99, pieces: 4 },
                    { level: 4, price: 29.99, pieces: 5 },
                    { level: 5, price: 49.99, pieces: 7 },
                    { level: 6, price: 99.99, pieces: 9 },
                ],
            },
            {
                category: Category.LUCKY,
                levels: [
                    { level: 1, price: 4.99, pieces: 1 },
                    { level: 2, price: 9.99, pieces: 2 },
                    { level: 3, price: 19.99, pieces: 4 },
                    { level: 4, price: 29.99, pieces: 5 },
                    { level: 5, price: 49.99, pieces: 7 },
                    { level: 6, price: 99.99, pieces: 9 },
                ],
            },
            {
                category: Category.EVENTS,
                events: [Events.MICHAEL_ARCHANGEL, Events.MARBLES],
            }

        ],
        "price": 6.99,
        "pieces": 200
    }
];