const zipRegex = {
    AD: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
        {
            regex: /^[a-zA-Z]{2}[0-9]{3}$/,
            example: 'AA111',
        },
    ],
    AM: [
        {
            regex: /^[0-9]{4}$/,
            example: '1111',
        },
    ],
    AR: [
        {
            regex: /^[0-9]{4}$/,
            example: '1111',
        },
    ],
    AS: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    AT: [
        {
            regex: /^[0-9]{4}$/,
            example: '1111',
        },
    ],
    AU: [
        {
            regex: /^[0-9]{4}$/,
            example: '1111',
        },
    ],
    AZ: [
        {
            regex: /^[0-9]{4}$/,
            example: '1111',
        },
        {
            regex: /^[0-9]{6}$/,
            example: '111111',
        },
    ],
    BA: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    BD: [
        {
            regex: /^[0-9]{4}$/,
            example: '1111',
        },
    ],
    BE: [
        {
            regex: /^[0-9]{4}$/,
            example: '1111',
        },
    ],
    BG: [
        {
            regex: /^[0-9]{4}$/,
            example: '1111',
        },
    ],
    BN: [
        {
            regex: /^[a-zA-Z]{2}[0-9]{4}$/,
            example: 'AA1111',
        },
    ],

    BR: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
        {
            regex: /^[0-9]{5}-[0-9]{3}$/,
            example: '11111-111',
        },
    ],
    BY: [
        {
            regex: /^[0-9]{6}$/,
            example: '111111',
        },
    ],
    CA: [
        {
            regex: /^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1} [0-9]{1}[a-zA-Z]{1}$/,
            example: 'A3A 3A',
        },
        {
            regex: /^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1} [0-9]{1}[a-zA-Z]{1}[0-9]{1}$/,
            example: 'A3A 3A3',
        },
    ],
    CH: [
        {
            regex: /^[0-9]{4}$/,
            example: '1111',
        },
    ],
    CN: [
        {
            regex: /^[0-9]{6}$/,
            example: '111111',
        },
    ],
    CO: [
        {
            regex: /^[0-9]{6}$/,
            example: '111111',
        },
    ],
    CU: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    CY: [
        {
            regex: /^[0-9]{4}$/,
            example: '1111',
        },
    ],
    CZ: [
        {
            regex: /^[0-9]{3} [0-9]{2}$/,
            example: '111 11',
        },
    ],
    DE: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    DK: [
        {
            regex: /^[0-9]{4}$/,
            example: '1111',
        },
    ],
    DZ: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    EC: [
        {
            regex: /^[0-9]{6}$/,
            example: '111111',
        },
    ],
    EE: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    ES: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    FI: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    FM: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    FO: [
        {
            regex: /^[0-9]{3}$/,
            example: '111',
        },
    ],
    FR: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    GB: [
        {
            regex: /^[a-zA-Z]{2}[0-9]{1}[a-zA-Z]{1} [0-9]{1}[a-zA-Z]{2}$/,
            example: 'AA3A 3AA',
        },
        {
            regex: /^[a-zA-Z]{1}[0-9]{2} [0-9]{1}[a-zA-Z]{2}$/,
            example: 'A33 3AA',
        },
        {
            regex: /^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1} [0-9]{1}[a-zA-Z]{2}$/,
            example: 'A3A 3AA',
        },
        {
            regex: /^[a-zA-Z]{1}[0-9]{1} [0-9]{1}[a-zA-Z]{2}$/,
            example: 'A3 3AA',
        },
        {
            regex: /^[a-zA-Z]{2}[0-9]{2} [0-9]{1}[a-zA-Z]{2}$/,
            example: 'AA33 3AA',
        },
        {
            regex: /^[a-zA-Z]{2}[0-9]{1} [0-9]{1}[a-zA-Z]{2}$/,
            example: 'AA3 3AA',
        },
    ],
    GE: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    GF: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    GG: [
        {
            regex: /^[a-zA-Z]{2}[0-9]{2} [0-9]{1}[a-zA-Z]{2}$/,
            example: 'AA33 3AA',
        },
        {
            regex: /^[a-zA-Z]{2}[0-9]{1} [0-9]{1}[a-zA-Z]{2}$/,
            example: 'AA3 3AA',
        },
    ],
    GL: [
        {
            regex: /^[0-9]{4}$/,
            example: '1111',
        },
    ],
    GP: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    GR: [
        {
            regex: /^[0-9]{3} [0-9]{2}$/,
            example: '111 11',
        },
    ],
    GU: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
        {
            regex: /^[0-9]{5}-[0-9]{4}$/,
            example: '11111-1111',
        },
    ],
    HR: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    HU: [
        {
            regex: /^[0-9]{4}$/,
            example: '1111',
        },
    ],
    IC: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    ID: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    IL: [
        {
            regex: /^[0-9]{7}$/,
            example: '1111111',
        },
    ],
    IN: [
        {
            regex: /^[0-9]{6}$/,
            example: '111111',
        },
    ],
    IS: [
        {
            regex: /^[0-9]{3}$/,
            example: '111',
        },
    ],
    IT: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    JE: [
        {
            regex: /^[a-zA-Z]{2}[0-9]{1} [0-9]{1}[a-zA-Z]{2}$/,
            example: 'AA3 3AA',
        },
    ],
    JP: [
        {
            regex: /^[0-9]{3}-[0-9]{4}$/,
            example: '1111',
        },
    ],
    KG: [
        {
            regex: /^[0-9]{6}$/,
            example: '111111',
        },
    ],
    KH: [
        {
            regex: /^[0-9]{6}$/,
            example: '111111',
        },
    ],
    KR: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    KV: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    KZ: [
        {
            regex: /^[0-9]{6}$/,
            example: '111111',
        },
    ],
    LI: [
        {
            regex: /^[0-9]{4}$/,
            example: '1111',
        },
    ],
    LT: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    LU: [
        {
            regex: /^[0-9]{4}$/,
            example: '1111',
        },
    ],
    LV: [
        {
            regex: /^[0-9]{4}$/,
            example: '1111',
        },
    ],
    MA: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    MC: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    MD: [
        {
            regex: /^[0-9]{4}$/,
            example: '1111',
        },
    ],
    ME: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    MG: [
        {
            regex: /^[0-9]{3}$/,
            example: '111',
        },
    ],
    MH: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    MK: [
        {
            regex: /^[0-9]{4}$/,
            example: '1111',
        },
    ],
    MN: [
        {
            regex: /^[0-9]{6}$/,
            example: '111111',
        },
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    MP: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    MQ: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    MV: [
        {
            regex: /^[0-9]{4}$/,
            example: '1111',
        },
    ],
    MX: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    MY: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    NC: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    NL: [
        {
            regex: /^[0-9]{4}$/,
            example: '1111',
        },
        {
            regex: /^[0-9]{4} [a-zA-Z]{2}$/,
            example: '3333 AA',
        },
    ],
    NO: [
        {
            regex: /^[0-9]{4}$/,
            example: '1111',
        },
    ],
    NZ: [
        {
            regex: /^[0-9]{4}$/,
            example: '1111',
        },
    ],
    PF: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    PG: [
        {
            regex: /^[0-9]{3}$/,
            example: '111',
        },
    ],
    PH: [
        {
            regex: /^[0-9]{4}$/,
            example: '1111',
        },
    ],
    PK: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    PL: [
        {
            regex: /^[0-9]{2}-[0-9]{3}$/,
            example: '11-111',
        },
    ],
    PR: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    PT: [
        {
            regex: /^[0-9]{4}-[0-9]{3}$/,
            example: '1111-111',
        },
    ],
    PW: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    RE: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    RO: [
        {
            regex: /^[0-9]{6}$/,
            example: '111111',
        },
    ],
    RS: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    RU: [
        {
            regex: /^[0-9]{6}$/,
            example: '111111',
        },
    ],
    SE: [
        {
            regex: /^[0-9]{3} [0-9]{2}$/,
            example: '111 11',
        },
    ],
    SG: [
        {
            regex: /^[0-9]{6}$/,
            example: '111111',
        },
    ],
    SH: [
        {
            regex: /^[a-zA-Z]{4} [0-9]{1}[a-zA-Z]{2}$/,
            example: 'AAAA 3AA',
        },
    ],
    SI: [
        {
            regex: /^[0-9]{4}$/,
            example: '1111',
        },
    ],
    SK: [
        {
            regex: /^[0-9]{3} [0-9]{2}$/,
            example: '111 11',
        },
    ],
    SM: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    SZ: [
        {
            regex: /^[a-zA-Z]{1}[0-9]{3}$/,
            example: 'A333',
        },
    ],
    TH: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    TM: [
        {
            regex: /^[0-9]{6}$/,
            example: '111111',
        },
    ],
    TN: [
        {
            regex: /^[0-9]{4}$/,
            example: '1111',
        },
    ],
    TR: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    TW: [
        {
            regex: /^[0-9]{3}$/,
            example: '111',
        },
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    UA: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    US: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
        {
            regex: /^[0-9]{5}-[0-9]{4}$/,
            example: '11111-1111',
        },
    ],
    UZ: [
        {
            regex: /^[0-9]{6}$/,
            example: '111111',
        },
    ],
    VI: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    XY: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    YT: [
        {
            regex: /^[0-9]{5}$/,
            example: '11111',
        },
    ],
    ZA: [
        {
            regex: /^[0-9]{4}$/,
            example: '1111',
        },
    ],
};

const countryNames = {
    DZ: 'ALGERIA',
    AS: 'AMERICAN SAMOA',
    AD: 'ANDORRA',
    AR: 'ARGENTINA',
    AM: 'ARMENIA',
    AU: 'AUSTRALIA',
    AT: 'AUSTRIA',
    AZ: 'AZERBAIJAN',
    BD: 'BANGLADESH',
    BY: 'BELARUS',
    BE: 'BELGIUM',
    BA: 'BOSNIA AND HERZEGOVINA',
    BR: 'BRAZIL',
    BN: 'BRUNEI',
    BG: 'BULGARIA',
    KH: 'CAMBODIA',
    CA: 'CANADA',
    IC: 'CANARY ISLANDS, THE',
    CN: 'CHINA, PEOPLES REPUBLIC',
    CO: 'COLOMBIA',
    MP: 'COMMONWEALTH NO. MARIANA ISLANDS',
    HR: 'CROATIA',
    CU: 'CUBA',
    CY: 'CYPRUS',
    CZ: 'CZECH REPUBLIC, THE',
    DK: 'DENMARK',
    EC: 'ECUADOR',
    EE: 'ESTONIA',
    FO: 'FAROE ISLANDS',
    FI: 'FINLAND',
    FR: 'FRANCE',
    GF: 'FRENCH GUYANA',
    GE: 'GEORGIA',
    DE: 'GERMANY',
    GR: 'GREECE',
    GL: 'GREENLAND',
    GP: 'GUADELOUPE',
    GU: 'GUAM',
    GG: 'GUERNSEY',
    HU: 'HUNGARY',
    IS: 'ICELAND',
    IN: 'INDIA',
    ID: 'INDONESIA',
    IL: 'ISRAEL',
    IT: 'ITALY',
    JP: 'JAPAN',
    JE: 'JERSEY',
    KZ: 'KAZAKHSTAN',
    KR: 'KOREA, REPUBLIC OF (SOUTH K.)',
    KV: 'KOSOVO',
    KG: 'KYRGYZSTAN',
    LV: 'LATVIA',
    LI: 'LIECHTENSTEIN',
    LT: 'LITHUANIA',
    LU: 'LUXEMBOURG',
    MG: 'MADAGASCAR',
    MY: 'MALAYSIA',
    MV: 'MALDIVES',
    MH: 'MARSHALL ISLANDS',
    MQ: 'MARTINIQUE',
    YT: 'MAYOTTE',
    MX: 'MEXICO',
    FM: 'MICRONESIA, FEDERATED STATES OF',
    MD: 'MOLDOVA, REPUBLIC OF',
    MC: 'MONACO',
    MN: 'MONGOLIA',
    ME: 'MONTENEGRO, REPUBLIC OF',
    MA: 'MOROCCO',
    NL: 'NETHERLANDS, THE',
    NC: 'NEW CALEDONIA',
    NZ: 'NEW ZEALAND',
    MK: 'NORTH MACEDONIA',
    NO: 'NORWAY',
    PK: 'PAKISTAN',
    PW: 'PALAU',
    PG: 'PAPUA NEW GUINEA',
    PH: 'PHILIPPINES, THE',
    PL: 'POLAND',
    PT: 'PORTUGAL',
    PR: 'PUERTO RICO',
    RE: 'REUNION, ISLAND OF',
    RO: 'ROMANIA',
    RU: 'RUSSIAN FEDERATION, THE',
    SH: 'SAINT HELENA',
    SM: 'SAN MARINO',
    RS: 'SERBIA, REPUBLIC OF',
    SG: 'SINGAPORE',
    SK: 'SLOVAKIA',
    SI: 'SLOVENIA',
    ZA: 'SOUTH AFRICA',
    ES: 'SPAIN',
    XY: 'ST. BARTHELEMY',
    SZ: 'SWAZILAND',
    SE: 'SWEDEN',
    CH: 'SWITZERLAND',
    PF: 'TAHITI',
    TW: 'TAIWAN',
    TH: 'THAILAND',
    TN: 'TUNISIA',
    TR: 'TURKEY',
    TM: 'TURKMENISTAN',
    UA: 'UKRAINE',
    GB: 'UNITED KINGDOM',
    US: 'UNITED STATES OF AMERICA',
    UZ: 'UZBEKISTAN',
    VI: 'VIRGIN ISLANDS (US)',
};

export function getCountryCodes() {
    return Object.keys(zipRegex);
}

export function getCountryName(countryCode) {
    return countryNames[countryCode];
}

export function getZipExample(countryCode) {
    const result = [];

    zipRegex[countryCode].forEach((entry) => {
        result.push(entry.example);
    });

    return result;
}

export function validateZip(countryCode, input) {
    let result = false;

    zipRegex[countryCode].forEach((entry) => {
        if (entry.regex.test(input)) {
            result = true;
        }
    });

    return result;
}

export function countryCodeExists(countryCode) {
    const result = Object.prototype.hasOwnProperty.call(zipRegex, countryCode);

    if (!result) {
        return false;
    }

    return true;
}

export function validateZipCode(countryCode, zipCode) {
    if (!countryCodeExists(countryCode)) {
        return false;
    }

    const zipObjects = zipRegex[countryCode];

    for (let z = 0; z < zipObjects.length; z += 1) {
        if (zipObjects[z].regex.test(zipCode)) {
            return true;
        }
    }

    return false;
}
