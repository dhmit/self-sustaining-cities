import React from "react";

let JsonData= [
    {
        "tract78": "Persons 25 years or older",
        "total": 6590,
        "male": 3153,
        "female": 3377
    },
    {
        "tract78": "No school years completed",
        "total": 147,
        "male": 61,
        "female": 86
    },
    {
        "tract78": "Grade School: 1-4 years",
        "total": 775,
        "male": 438,
        "female": 337
    },
    {
        "tract78": "Grade school: 5-6 years",
        "total": 1024,
        "male": 495,
        "female": 529
    },
    {
        "tract78": "Grade school: 7-8 years",
        "total": 1827,
        "male": 884,
        "female": 943
    },
    {
        "tract78": "High school: 1-3 years",
        "total": 1208,
        "male": 549,
        "female": 659
    },
    {
        "tract78": "High school: 4 years",
        "total": 769,
        "male": 344,
        "female": 425
    },
    {
        "tract78": "College: 1-3 years",
        "total": 388,
        "male": 175,
        "female": 213
    },
    {
        "tract78": "College: 4+ years",
        "total": 286,
        "male": 156,
        "female": 130
    },
    {
        "tract78": "Not Reported",
        "total": 106,
        "male": 51,
        "female": 55
    },
    {
        "tract78": "Median School Years",
        "total": 8.4,
        "male": 8.3,
        "female": 8.5
    },
    {
        "tract78": "Employment Status"
    },
    {
        "tract78": "Persons 14 years and over",
        "total": 9101,
        "male": 4420,
        "female": 4681
    },
    {
        "tract78": "In labor force",
        "total": 5507,
        "male": 3540,
        "female": 1967
    },
    {
        "tract78": "Percent of pop. 14+",
        "total": 60.5,
        "male": 80.1,
        "female": 42
    },
    {
        "tract78": "Employed (exc. on pub. emerg. work)",
        "total": 4319,
        "male": 2850,
        "female": 1469
    },
    {
        "tract78": "Wage and Salaray Workers",
        "total": 3986,
        "male": 2612,
        "female": 1374
    },
    {
        "tract78": "Employers and own-account workers",
        "total": 298,
        "male": 224,
        "female": 74
    },
    {
        "tract78": "Unpaid family workers",
        "total": 18,
        "male": 8,
        "female": 10
    },
    {
        "tract78": "Class of worker not reported",
        "total": 17,
        "male": 6,
        "female": 11
    },
    {
        "tract78": "On public emergency work (WPA, NYA, etc)",
        "total": 313,
        "male": 220,
        "female": 93
    },
    {
        "tract78": "Seeking work",
        "total": 875,
        "male": 470,
        "female": 405
    },
    {
        "tract78": "Experienced workers",
        "total": 671,
        "male": 364,
        "female": 307
    },
    {
        "tract78": "New workers",
        "total": 204,
        "male": 106,
        "female": 98
    },
    {
        "tract78": "Not in labor force",
        "total": 3594,
        "male": 880,
        "female": 2714
    },
    {
        "tract78": "Engaged in home housework",
        "total": 1750,
        "male": 7,
        "female": 1743
    },
    {
        "tract78": "In school",
        "total": 986,
        "male": 494,
        "female": 492
    },
    {
        "tract78": "Unable to work",
        "total": 459,
        "male": 160,
        "female": 299
    },
    {
        "tract78": "In institutions",
        "total": 1,
        "male": 1,
        "female": 0
    },
    {
        "tract78": "Other and not reported",
        "total": 398,
        "male": 218,
        "female": 180
    },
    {
        "tract78": "Major Occupation Group"
    },
    {
        "tract78": "Employed (exc. on pub. emerg. work)",
        "total": 4319,
        "male": 2850,
        "female": 1469
    },
    {
        "tract78": "Professional workers",
        "total": 160,
        "male": 69,
        "female": 91
    },
    {
        "tract78": "Semiprofessional workers",
        "total": 32,
        "male": 27,
        "female": 5
    },
    {
        "tract78": "Proprietors, managers, and officials",
        "total": 141,
        "male": 124,
        "female": 17
    },
    {
        "tract78": "Clerical, sales, and kindred workers",
        "total": 707,
        "male": 450,
        "female": 257
    },
    {
        "tract78": "Craftsmen, fooremen, and kindred workers",
        "total": 381,
        "male": 379,
        "female": 2
    },
    {
        "tract78": "Operatives and kindred workers",
        "total": 694,
        "male": 565,
        "female": 129
    },
    {
        "tract78": "Domestic service workers",
        "total": 618,
        "male": 20,
        "female": 598
    },
    {
        "tract78": "Service workers, except domestic",
        "total": 885,
        "male": 539,
        "female": 346
    },
    {
        "tract78": "Laborers",
        "total": 674,
        "male": 663,
        "female": 11
    },
    {
        "tract78": "Occupation not reported",
        "total": 27,
        "male": 14,
        "female": 13
    },
    {
        "tract78": "Country of Birth of \nForeign-Born White"
    },
    {
        "tract78": "All countries",
        "total": 538,
        "male": 291,
        "female": 247
    },
    {
        "tract78": "England and Wales",
        "total": 15,
        "male": 6,
        "female": 9
    },
    {
        "tract78": "Scotland",
        "total": 12,
        "male": 6,
        "female": 6
    },
    {
        "tract78": "Northern Ireland",
        "total": 0,
        "male": 0,
        "female": 0
    },
    {
        "tract78": "Irish Free State (Eire)",
        "total": 4,
        "male": 1,
        "female": 3
    },
    {
        "tract78": "Norway",
        "total": 1,
        "male": 0,
        "female": 1
    },
    {
        "tract78": "Sweden",
        "total": 2,
        "male": 2,
        "female": 0
    },
    {
        "tract78": "Denmark",
        "total": 0,
        "male": 0,
        "female": 0
    },
    {
        "tract78": "Netherlands",
        "total": 1,
        "male": 1,
        "female": 0
    },
    {
        "tract78": "Belgium",
        "total": 0,
        "male": 0,
        "female": 0
    },
    {
        "tract78": "Switzerland",
        "total": 5,
        "male": 4,
        "female": 1
    },
    {
        "tract78": "France",
        "total": 1,
        "male": 1,
        "female": 0
    },
    {
        "tract78": "Germany",
        "total": 32,
        "male": 17,
        "female": 15
    },
    {
        "tract78": "Poland",
        "total": 12,
        "male": 6,
        "female": 6
    },
    {
        "tract78": "Czechslovakia",
        "total": 1,
        "male": 1,
        "female": 0
    },
    {
        "tract78": "Austria",
        "total": 3,
        "male": 1,
        "female": 2
    },
    {
        "tract78": "Hungary",
        "total": 5,
        "male": 2,
        "female": 3
    },
    {
        "tract78": "Yugoslavia",
        "total": 0,
        "male": 0,
        "female": 0
    },
    {
        "tract78": "Russia (U.S.S.R)",
        "total": 40,
        "male": 22,
        "female": 18
    },
    {
        "tract78": "Lithuania",
        "total": 3,
        "male": 1,
        "female": 2
    },
    {
        "tract78": "Finaldn",
        "total": 0,
        "male": 0,
        "female": 0
    },
    {
        "tract78": "Rumania",
        "total": 2,
        "male": 2,
        "female": 0
    },
    {
        "tract78": "Greece",
        "total": 6,
        "male": 5,
        "female": 1
    },
    {
        "tract78": "Italy",
        "total": 20,
        "male": 11,
        "female": 9
    },
    {
        "tract78": "Spain and Portugal",
        "total": 0,
        "male": 0,
        "female": 0
    },
    {
        "tract78": "Other Europe",
        "total": 1,
        "male": 1,
        "female": 0
    },
    {
        "tract78": "Asia",
        "total": 4,
        "male": 3,
        "female": 1
    },
    {
        "tract78": "Canada-French",
        "total": 0,
        "male": 0,
        "female": 0
    },
    {
        "tract78": "Canada-Other",
        "total": 10,
        "male": 5,
        "female": 5
    },
    {
        "tract78": "Newfoundland",
        "total": 1,
        "male": 1,
        "female": 0
    },
    {
        "tract78": "Mexico",
        "total": 2,
        "male": 0,
        "female": 2
    },
    {
        "tract78": "Cuba and other West Indies",
        "total": 1,
        "male": 1,
        "female": 0
    },
    {
        "tract78": "Central and South America",
        "total": 1,
        "male": 0,
        "female": 1
    },
    {
        "tract78": "All other and not reported",
        "total": 1,
        "male": 1,
        "female": 0
    },
    {
        "tract78": "Citizenship of Foreign-Born\nWhite 21 Years and Older"
    },
    {
        "tract78": "Total",
        "total": 176,
        "male": 95,
        "female": 81
    },
    {
        "tract78": "Naturalized",
        "total": 124,
        "male": 69,
        "female": 55
    },
    {
        "tract78": "Alien-First papers",
        "total": 30,
        "male": 20,
        "female": 10
    },
    {
        "tract78": "Alien-No papers",
        "total": 17,
        "male": 4,
        "female": 13
    },
    {
        "tract78": "Citizenship not reported",
        "total": 5,
        "male": 2,
        "female": 3
    }
];


function Table3(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr key={info.count}>
                    <td>{info.tract78}</td>
                    <td>{info.total}</td>
                    <td> {info.male}</td>
                    <td> {info.female}</td>
                </tr>
            );
        }
    );
    return(
        <div>
            <table className="table formatting">
                <thead>
                    <tr>
                        <th>Tract 78</th>
                        <th>Total</th>
                        <th>Male</th>
                        <th>Female</th>
                    </tr>
                </thead>
                <tbody>


                    {DisplayData}

                </tbody>
            </table>

        </div>
    );
}
export default Table3;
