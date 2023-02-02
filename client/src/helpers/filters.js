
export const getCountriesAlphabetically = (countriesdata, order) => {
  if(order === "ASC") return countriesdata.sort((a,b)=>{
    if (a.name>b.name) return 1
    if (a.name<b.name) return -1
    return 0
   })

   if(order === "DES") return countriesdata.sort((a,b)=>{
    if (a.name<b.name) return 1
    if (a.name>b.name) return -1
    return 0
  })
}


 export const getCountriesbyPopulation = (countriesdata, order) => {
  if(order === 'ASC') return countriesdata.sort((a,b)=> a.population - b.population)
  if(order === 'DES') return countriesdata.sort((a,b)=> b.population - a.population)
}


                                          
export const getCountriesbyContinent = (countriesdata, continent)=>{
     if(continent === 'All') return countriesdata
    return countriesdata.filter(country => country.continet === continent)
 }
