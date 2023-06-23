import { useEffect, useCallback, useState } from 'react';
import Map, { NavigationControl, Source, Layer } from 'react-map-gl';
import PropTypes from 'prop-types';

import 'mapbox-gl/dist/mapbox-gl.css';
import { ResetButtonControl } from './map-controls/ExtentButtonGroup';


import  { zipStyle, mapStyles } from './layerStyles';
import { getEnrichedData } from '../utils/data_utils';

const ACCESS_TOKEN = 'pk.eyJ1IjoiZGF1ZGk5NyIsImEiOiJjanJtY3B1bjYwZ3F2NGFvOXZ1a29iMmp6In0.9ZdvuGInodgDk7cv-KlujA';

function MapComponent(props) {
  let { activeLayer, activeData } = props;

  const [data, setData] = useState(null);

  const fetchData = useCallback(async ({ activeLayer, activeData }) => {
    let dataRes = await getEnrichedData(activeLayer, activeData);

    console.log(dataRes);
    setData(dataRes);
  }, []);


  useEffect(() => {
    fetchData(props)
      .catch(console.error)
  }, [fetchData, props]);

  console.log(mapStyles);
  console.log(mapStyles[activeData][activeLayer]);
  return (
    <Map
        mapboxAccessToken={ACCESS_TOKEN}
        initialViewState={{
            longitude: -95.39,
            latitude: 38.37,
            zoom: 3.5
        }}
        className="mapbox-map"
        mapStyle="mapbox://styles/mapbox/dark-v9"
    >
        <NavigationControl />
        <ResetButtonControl position={"top-right"}/>

        {/* layers */}
        {
          (data && activeLayer == 'State') && 
          <Source id="state" type="geojson" data={data}>
            <Layer {...mapStyles[activeData][activeLayer]} />
          </Source>
        }

        {
          (data && activeLayer == 'County') && 
          <Source id="county" type="geojson" data={data}>
            <Layer {...mapStyles[activeData][activeLayer]} />
          </Source>
        }

        {
          (data && activeLayer == 'Zip') && 
          <Source id="zipcode" type="geojson" data={data}>
            <Layer {...zipStyle} />
          </Source>
        }
    </Map>
  );
}

MapComponent.propTypes = {
  activeLayer:PropTypes.string,
  activeData:PropTypes.string
}

export default MapComponent;