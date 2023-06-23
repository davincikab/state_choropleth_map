import { useControl } from 'react-map-gl';
import PropTypes from 'prop-types';

// Control implemented as ES6 class
class ResetMapStateControl {
    constructor({ initMapState }) {
        console.log(initMapState)
        this.initMapState = { ...initMapState };

        this.extents = {
            'alaska':[3, 64.92, -153.72],
            'mainland':[3.5, 38.37, -95.39],
            'hawaii':[6, 20.799, -157.6]
        }
    }

    resetMapState(key) {
        let [ zoom, latitude, longitude] = this.extents[key];

        console.log("Reset Event: ", [longitude, latitude]);

        this._map.flyTo({
            center:[longitude, latitude],
            zoom:zoom
        })
    }

    onAdd(map) {
        this._map = map;
        this._container = document.createElement('div');
        this._container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
        // this._container.textContent = 'Hello, world';

        // mainland usa
        this.reset_button_mainland = document.createElement('button');
        this.reset_button_mainland.className = 'btn-ctrl'
        this.reset_button_mainland.innerHTML = `<img src="/assets/images/usa_mainland.svg" />`;
        this._container.append(this.reset_button_mainland);


        // alaska button
        this.reset_button_alaska = document.createElement('button');
        this.reset_button_alaska.className = 'btn-ctrl'
        this.reset_button_alaska.innerHTML = `<img src="/assets/images/usa_alaska.svg" />`;
        this._container.append(this.reset_button_alaska);

        // hawaii button
        this.reset_button_hawaii = document.createElement('button');
        this.reset_button_hawaii.className = 'btn-ctrl'
        this.reset_button_hawaii.innerHTML = `<img src="/assets/images/usa_hawaii.svg" />`;
        this._container.append(this.reset_button_hawaii);

        // event listeners
        this.reset_button_alaska.onclick = () => this.resetMapState('alaska');
        this.reset_button_mainland.onclick = () => this.resetMapState('mainland');
        this.reset_button_hawaii.onclick = () => this.resetMapState('hawaii');

        return this._container;
    }
     
    onRemove() {
        this._container.parentNode.removeChild(this._container);
        this._map = undefined;
    }
}

function ResetButtonControl(props) {
    useControl(
        ({map, mapLib}) => {
            return new ResetMapStateControl({map, mapLib, ...props}) 
        }, 
        {
            position: props.position
        }
    );
  
    return null;
}

ResetButtonControl.propTypes = {
    position:PropTypes.string
}

export { ResetButtonControl, ResetMapStateControl }