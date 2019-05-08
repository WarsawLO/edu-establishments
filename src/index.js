import axios from 'axios'

class Establishments{
    constructor(reference = null){
        this.reference = reference === 'wgs84' ? reference : 'pl2000'
        this.api = axios.create({
            baseURL: `https://mapa.um.warszawa.pl/WebServices/PlacowkiOswiatowe/${this.reference}`,
          })
    }
    set responseType(type){
        this.api.defaults.responseType = type
    }
    useTransformer(transformer){
        this.api.defaults.transformResponse = [transformer]
        return (() => this.api.defaults.transformResponse = []).bind(this)
    }
    findAll(){
        return this.api.get(`/findAll`)
    }
    findByDistrict(district){
        return this.api.get(`/findByDistrict/${district}`)
    }
    findByName(name){
        return this.api.get(`/findByName/${name}`)
    }
    findByNameAndType(name, type){
        return this.api.get(`/findByNameAndType/${name}/${type}`)
    }
    findByStreetAndNumber(street, number){
        return this.api.get(`/findByStreetAndNumber/${street}/${number}`)
    }
}
export default Establishments