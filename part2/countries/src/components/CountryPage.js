import React from 'react'

const CountryPage = ({countries}) => {
    console.log(countries[0].area)
    return (
        <div>
            <h1> {countries[0].name} </h1>
            <h5>Capital: {countries[0].name}</h5>

            <h5>Population: {countries[0].population}</h5>

            <h5>Located in {countries[0].subregion}</h5>

            <h3>Languages spoken</h3>
            <ul>
                {countries[0].languages
                .map(language => <li>
                    {language.name}
                </li>)}
            </ul>

            <img 
            src={countries[0].flag}
            alt={`Flag of ${countries[0].name}`}
            width="350" height="250"
            />
        </div>
    )
}

export default CountryPage