export const GET_CITY_BY_NAME = `
    query getCityByName($name: String!){
        getCityByName(name: $name, config: {units: metric}) {
            id
            name
            country
            weather {
                summary {
                    title
                    description
                    icon
                }
                temperature {
                    actual
                    feelsLike
                    min
                    max
                }
                wind {
                    speed
                    deg
                }
                clouds {
                    all
                    visibility
                    humidity
                }
                timestamp
            }
        }
    }
`;
