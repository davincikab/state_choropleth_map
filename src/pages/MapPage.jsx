import MapComponent from '../components/MapComponent';
import Card from '../components/Card';
import { useState } from 'react';

export default function MapPage() {
    const [state, setState] = useState({
        activeLayer:'State',
        activeData:'Airports'
    });

    // let cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let data = [
        // 'Employment & Rental Survey', 
        'Housing Costs', 
        'Tax Rate',
        // 'Weather', 
        // 'Tax Burden',
        // 'Education', 
        'Airports', 
        'NRI', 
        'Unemployment Rate', 
        // 'Hospital', 
        // 'Pollen Data'
    ];

    const handleLayerChange = (layer) => {
        setState({
            ...state,
            activeLayer:layer
        })
    }

    const handleDataChange = (dataKey) => {
        // check if the data has the 
        setState({
            ...state,
            activeData:dataKey
        })
    }

    const getLayerClassName = (layer) => {
        return activeLayer == layer ? "card active" : "card";
    } 

    const { activeLayer, activeData } = state;
    return (
        <div className='map-container'>
            <div className="menu-bar">
                <div className='header-toggler'>
                    Preferences
                </div>

                <div className='card-list'>
                    { data.map((item,i) => {
                        return <Card key={item} title={data[i]} handleOnclick={handleDataChange} activeData={activeData} />
                    })}
                </div>
            </div>

            <div className="data-toggler">
                <div className={getLayerClassName("State")} onClick={() => handleLayerChange("State")}>States</div>
                <div className={getLayerClassName("County")} onClick={() => handleLayerChange("County")}>Counties</div>
                {/* <div className={getLayerClassName("Zip")} onClick={() => handleLayerChange("Zip")}>Zip Codes</div> */}
            </div>
           

            <MapComponent activeLayer={activeLayer} activeData={activeData}/>
        </div>
    )
}
