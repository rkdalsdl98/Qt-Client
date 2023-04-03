module.exports = {
    /**
     * @type {{float, float, float}}
     */
    SEARCH_RANGE : {
        SMALL_RANGE: .005,
        MEDIUM_RANGE: .02,
        LARGE_RANGE: .1
    },
    /**
     * @type {{Array}}
     */
    LAT_LNG_DELTA : {
        DEFAULT: [0.0922, 0.0421],
    },
    /**
     * 최대 3초
     * @type {{Number, Number, Number}}
     */
    LOCATION_UPDATE_INTERVAL: {
        ONE_SECONDS: 1000,
        TWO_SECONDS: 2000,
        THREE_SECONDS: 3000,
    }
}