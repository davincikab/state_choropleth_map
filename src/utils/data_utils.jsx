import countyData from '../mocks/data/county.json';
import statesData from '../mocks/data/states.json';

import * as Papa from 'papaparse';

// const fileNames = {
//     'Employment & Rental Survey':"", 
//     'Housing Costs':"zhvi.csv", 
//     'Weather':"", 
//     'Tax Burden':"",
//     'Education':"", 
//     'Airports':"airports", 
//     'Hazards':"", 
//     'Unemployment':"", 
//     'Hospital':"", 
//     'Pollen Data':""
// };


export const getEnrichedData = async (layer, dataTitle) => {
    // let fileName = fileNames[dataTitle];
    let layerName = layer.toLocaleLowerCase();
    
    console.log(`/assets/data/${layerName}_${dataTitle}.csv`);

    try {
        let response = await fetch(`/assets/data/${layerName}_${dataTitle}.csv`);
        console.log(response);

        const reader = response.body.getReader();

        const result = await reader.read();
        const decoder = new TextDecoder('utf-8');

        const csv = decoder.decode(result.value); 
        const results = Papa.parse(csv, { header: true });
        // console.log(results);

        const rows = results.data;

        results.data = results.data.map(item => {
            let cols = Object.keys(item);

            cols.forEach(col => {
                item[col] = parseFloat(item[col]) ? parseFloat(item[col]) : item[col];
            });

            return item;
        });


        console.log(rows);

        return mergeData(results.data, layer);
    } catch (error) {
        console.log(error);
        return layer == 'State' ? statesData : countyData
    }
}


const mergeData = (csvData, layer) => {
    console.log(layer);

    if(layer == 'County') {
        // merge on state;
        let geoData = JSON.parse(JSON.stringify(countyData));

        geoData.features = geoData.features.filter(feature => {

            let fip = parseInt(feature.properties.COUNTYFP);
            let entry = csvData.find(item => item.COUNTYFP == fip);

            if(entry) {
                feature.properties = {...feature.properties, ...entry};
                return feature;

            } else {
                return false;
            }
            
            
        });

        return geoData;

    } else {
        // merge on state;
        let geoData = JSON.parse(JSON.stringify(statesData));

        geoData.features = geoData.features.filter(feature => {
            let entry = csvData.find(item => item.RegionName == feature.properties.Name);

            if(entry) {
                // console.log(entry.RegionName);
                feature.properties = {...feature.properties, ...entry};
                return feature;

            } else {
                return false;
            }
            
            
        });

        console.log("Data Merged");
        return geoData;
    }
}