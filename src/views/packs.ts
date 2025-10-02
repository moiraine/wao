export enum Days {
    MONDAY = "Mon",
    TUESDAY = "Tue",
    WEDNESDAY = "Wed",
    THURSDAY = "Thu",
    FRIDAY = "Fri",
    SATURDAY = "Sat",
    SUNDAY = "Sun",
}

export enum Category {
    DAILY = "Daily",
    WEEKLY = "Weekly",
    MONTHLY = "Monthly",
    LUCKY = "Lucky",
    TWICEAWEEK = "Twice a Week",
    EVENTS = "Events",
}

export enum Events {
    PONIES = "Ponies",
    GODDESS_BLESSING = "Goddess Blessing",
    LUCKY_WHEEL = "Lucky Wheel",
    MICHAEL_ARCHANGEL = "Michael Archangel",
    MINE_TREASURE_HUNT = "Mine Treasure Hunt",
    PEOPLES_SPENDING_SPREE = "Peoples Shopping Spree",
    HADES = "Hades",
    MARBLES = "Marbles",
    FARPLANE_INVASION = "Farplane Invasion",
    LOST_TREASURE = "Lost Treasure",
    FRONTIER_WAR = "Fontier War",
    BRAVE_VALLEY = "Brave Valley", // ares mark
    FORTRESS_WAR = "Fortress Wars",
    JOURNEY_OF_MIRACLES = "Journey of Miracles",
    DOUBLE_LUXURY_GIFT = "Double Luxury Gift",
    CAMEL = "Camel",
    JOKER = "Joker",
    WAR_CHAPTERS = "War Chapters",
    TREASURE_PATH = "Treasure Path",
    CANDY = "Candy",
    LORDS_CONQUEST = "Lords Conquest",
    GEM_MULTIPLIER = "Gem Multiplier",
    GARDEN_SET = "Garden Set",
}

export const listOfPackNames = {
    ARTIFACTS_ATHENA: 'Athena\'s Aegis',
    ARTIFACTS_LAEVATEINN: 'Laevateinn',
    ARTIFACTS_BRIONAC: 'Brionac',
    ARTIFACTS_APOLLOS_BOW: 'Apollo\'s Bow', 
    ARTIFACTS_POSEIDON: 'Poseidon\'s Trident',
    ARTIFACTS_THUNDERBOLT_CROWN: 'Thunderbolt Crown', 
    ARTIFACTS_ICE_CROWN: 'Ice Crown',
    ARTIFACTS_FIRE_DEMON_CROWN: 'Fire Demon Crown', 
    ARTIFACTS_EVERNIGHT_CROWN: 'Evernight Crown', 
    ARTIFACTS_ORANGE_FRAGMENTS: 'Orange Fragments',
    ARTIFACTS_CUSTOM: 'Custom Force Artifact',
    BEAST_ELEMENTS: 'Beast Elements', 
    BEAST_COMBO: 'Beast Combo',
    CUSTOM_STRENGTH: 'Custom Strength',
    EQUIPMENT_JEWELS_MIX: 'Jewel Combo',
    EQUIPMENT_JEWELS_ESSENCE: 'Jewels Essence',
    EQUIPMENT_MATERIALS: 'Materials',
    EQUIPMENT_OBSIDIAN: 'Obsidian',
    EQUIPMENT_RUBY: 'Ruby',
    EQUIPMENT_SAPPHIRE: 'Sapphire',
    EQUIPMENT_TOPAZ: 'Topaz',
    RESOURCE_AZURITE: 'Azurite', 
    RESOURCE_GEMS: 'Gems', 
    RESOURCE_VIP: 'VIP', 
    STARPALACE_CUSTOM: 'Custom Zodiac',
    STARPALACE_POLYCRYSTALLINE: 'Polycrystalline', 
    STARPALACE_STARLIGHT_STONES: 'Starlight Stones', 
    TITAN_EARTH_CORE: 'Earth Core',
    TITAN_RAW_ENERGY: 'Raw Energy', 
    TITAN_PROTOLITHIC_FRAGMENTS: 'Protolithic Fragments', 
    TITAN_ENHANCEMENT_CRYSTALS: 'Enhancement Crystals', 
    TOTEM_ORANGE_TATTOOS: 'Orange Tattoos', 
    TOTEM_PURPLE_RUNESTONES: 'Purple Runestones',
    TOTEM_PURPLE_TATTOOS: 'Purple Tattoos',
    EVENT_CAMEL: 'Camel Haystacks',
    EVENT_MARBLES: 'Marbles',
    EVENT_JESTER: 'Jester Card Pack',
    EVENT_FISHING: 'Fishing',
    EVENT_GODDESS: 'Lucky Ticket',
    EVENT_DRAGON_PRAYER: 'Drayon Prayer',

}

export const listOfPackCategories = {
    ARTIFACTS: 'Artifacts',
}

export const packsDataObject = {
    [listOfPackCategories.ARTIFACTS]: {
        [listOfPackNames.ARTIFACTS_ATHENA]: {
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
        [listOfPackNames.ARTIFACTS_LAEVATEINN]: {
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
                    days: [Days.TUESDAY],
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
                    estFrequency: "Monthly",
                    levels: [
                        { level: 1, price: 4.99, pieces: 3 },
                        { level: 2, price: 6.99, pieces: 4 },
                        { level: 3, price: 14.99, pieces: 7 },
                        { level: 4, price: 29.99, pieces: 12 },
                        { level: 5, price: 49.99, pieces: 16 },
                        { level: 6, price: 99.99, pieces: 27 },
                        { level: 7, price: 99.99, pieces: 27 },
                    ],
                },
                {
                    category: Category.EVENTS,
                    events: [Events.MICHAEL_ARCHANGEL, Events.MARBLES],
                }
    
            ],
        }
    }
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
                estFrequency: "Monthly",
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