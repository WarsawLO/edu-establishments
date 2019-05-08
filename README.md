
# edu-establishments

Tiny API wrapper for educational layer of Warsaw Map Service (https://mapa.um.warszawa.pl)

## Installation

```bash

yarn add @warsawlo/edu-establishments
```
or
```bash

npm i -S @warsawlo/edu-establishments

```

## Getting started

```javascript

import Establishments  from  '@warsawlo/edu-establishments'

const establishments = new Establishments()

establishments.findAll().then(res => {})

establishments.findByDistrict(district).then(res => {})

establishments.findByName(name).then(res => {})

establishments.findByNameAndType(name, type).then(res => {})

establishments.findByStreetAndNumber(street, number).then(res => {})

establishments.responseType = 'stream' // default: json

establishments.useTransformer(transformer)
// transformer is a function invoked under the hood by axios` transformResponse
```
### Quite important!

Before using API resources of The City of Warsaw check [this reuse terms (PL only)](http://www.mapa.um.warszawa.pl/warunki.html)
You can find all (not only educational) API spec [here (PL only)](https://mapa.um.warszawa.pl/files/Dokumentacja_uslug_REST_SOAP_BGiK.pdf)


## API Reference

All functions (except ``setTranformer``) provide data in GeoJSON format

### new Establishments(reference)

| Param | Type | Default value | Description |
| - | - | - | - |
| reference | ``string`` | ``pl2000`` | Sets coordinate system. It can be ``pl2000`` or ``wgs84``.

Returns Establishments instance.

#### .findAll()

Get all educational establishments in Warsaw.

Returns promise from the [axios](https://github.com/axios/axios) call

#### .findByName(name)

Find educational establishments by establishment's name.

| Param | Type | Description |
| - | - | - |
| name | ``String`` | Establishment name

Returns promise from the [axios](https://github.com/axios/axios) call

#### .findByNameAndType(name, type)

Find educational establishments by establishment's name and type.

| Param | Type | Description |
| - | - | - |
| name | ``String`` | Establishment's name
| type | ``String`` | Establishment's type [See list of types](#types)

Returns promise from the [axios](https://github.com/axios/axios) call

#### .findByDistrict(district)

Find educational establishments by establishment's name and type.

| Param | Type | Description |
| - | - | - |
| district | ``String`` | District which given establishments is located in ([List of districts of Warsaw](https://en.wikipedia.org/wiki/Districts_of_Warsaw))

Returns promise from the [axios](https://github.com/axios/axios) call

#### .findByStreetAndNumber(street, number)

Find educational establishments by establishment's address.

| Param | Type | Description |
| - | - | - |
| street | ``String`` | Street where establishment is located
| number | ``String`` | House number where the school is located

Returns promise from the [axios](https://github.com/axios/axios) call


#### .useTransformer(transformer)

Set axios' transformResponse function

| Param | Type | Description |
| - | - | - |
| transformer | ``Function`` | Street where establishment is located

```javascript
    const removeTranformer = instance.useTransformer(data => {
        return `Data object keys: ${Object.keys(data).join(', ')}`
    })

    removeTransformer()
```

#### .responseType

Set response type (``arraybuffer``, ``document``, ``json``, ``text``, ``stream``).

Default: ``json``

<a id="types"></a>
## List of types
| Type |
| :-- |
|  przedszkole |
|  szkoła podstawowa |
|  gimnazjum |
|  liceum |
|  liceum ogólnokształcące |
|  liceum dla dorosłych |
|  technikum |
|  szkoła branżowa I stopnia |
|  szkoła policealna |
|  bursa internat |
|  młodzieżowy dom kultury |
|  poradnia psychologiczno-pedagogiczna |
|  specjalistyczna poradnia psychologiczno-pedagogiczna |







