export const stateStyle = {
    id: 'state',
    type: 'fill',
    source: 'state',
    paint: {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['get', '12/31/2022'],
        0,
        '#F2F12D',
        100000,
        '#fee8c8',
        250000,
        '#fdd49e',
        300000,
        '#fdbb84',
        400000,
        '#fc8d59',
        500000,
        '#ef6548',
        750000,
        '#d7301f',
        1000000,
        '#990000'
      ],
      'fill-opacity':0.6,
      'fill-outline-color':'#fff'
    }
};

export const countyStyle = {
    id: 'county',
    type: 'fill',
    source: 'county',
    paint: {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['get', '12/31/2022'],
        0,
        '#F2F12D',
        100000,
        '#fee8c8',
        250000,
        '#fdd49e',
        300000,
        '#fdbb84',
        400000,
        '#fc8d59',
        500000,
        '#ef6548',
        750000,
        '#d7301f',
        1000000,
        '#990000'
      ],
      'fill-opacity':0.6,
      'fill-outline-color':'#fff'
    }
};

// ['#fff7ec','#fee8c8','#fdd49e','#fdbb84','#fc8d59','#ef6548','#d7301f','#990000']

export const zipStyle = {
  id: 'zipcode',
  type: 'fill',
  source: 'zipcode',
  paint: {
    'fill-color': '#2E3A38',
    'fill-outline-color':'#fff'
  }
};


export const mapStyles = {
  'Airports':{
    'State':{
      id: 'state',
      type: 'fill',
      source: 'state',
      paint: {
        'fill-color': [
          'interpolate',
          ['linear'],
          ['get', 'count'],
          0,
          '#F2F12D',
          500,
          '#fee8c8',
          1000,
          '#fdd49e',
          1500,
          '#fdbb84',
          2000,
          '#fc8d59',
          2500,
          '#ef6548',
          3000,
          '#d7301f',
          3500,
          '#990000',
          4000,
          '#990000'
        ],
      'fill-opacity':0.6,
      'fill-outline-color':'#fff'
      }
    },
    'County':{
      id: 'county',
      type: 'fill',
      source: 'county',
      paint: {
        'fill-color': [
          'interpolate',
          ['linear'],
          ['get', 'count'],
          0,
          '#F2F12D',
          // 50,
          // '#fee8c8',
          // 100,
          // '#fdd49e',
          // 150,
          // '#fdbb84',
          // 200,
          // '#fc8d59',
          250,
          '#990000',
          // 300,
          // '#d7301f',
          500,
          '#990000'
        ],
        'fill-opacity':0.8,
        'fill-outline-color':'#fff'
      }
    }
  },

  'Housing Costs':{
    'State':{
      id: 'state',
      type: 'fill',
      source: 'state',
      paint: {
        'fill-color': [
          'interpolate',
          ['linear'],
          ['get', '12/31/2022'],
          0,
          '#F2F12D',
          100000,
          '#fee8c8',
          250000,
          '#fdd49e',
          300000,
          '#fdbb84',
          400000,
          '#fc8d59',
          500000,
          '#ef6548',
          750000,
          '#d7301f',
          1000000,
          '#990000'
        ],
        'fill-opacity':0.6,
        'fill-outline-color':'#fff'
      }
    },
    'County':{
      id: 'county',
      type: 'fill',
      source: 'county',
      paint: {
        'fill-color': [
          'interpolate',
          ['linear'],
          ['get', '12/31/2022'],
          0,
          '#F2F12D',
          100000,
          '#fee8c8',
          250000,
          '#fdd49e',
          300000,
          '#fdbb84',
          400000,
          '#fc8d59',
          500000,
          '#ef6548',
          750000,
          '#d7301f',
          1000000,
          '#990000'
        ],
        'fill-opacity':0.6,
        'fill-outline-color':'#fff'
      }
    }
  },


  // NRI
  'NRI':{
    'State':{
      id: 'state',
      type: 'fill',
      source: 'state',
      paint: {
        'fill-color': [
          'interpolate',
          ['linear'],
          ['get', 'EAL_SCORE'],
          0,
          '#F2F12D',
          15,
          '#fee8c8',
          30,
          '#fdd49e',
          45,
          '#fdbb84',
          60,
          '#fc8d59',
          75,
          '#ef6548',
          90,
          '#d7301f',
          100,
          '#990000'
        ],
        'fill-opacity':0.6,
        'fill-outline-color':'#fff'
      }
    },
    'County':{
      id: 'county',
      type: 'fill',
      source: 'county',
      paint: {
        'fill-color': [
          'interpolate',
          ['linear'],
          ['get', 'RISK_SCORE'],
          0,
          '#F2F12D',
          15,
          '#fee8c8',
          30,
          '#fdd49e',
          45,
          '#fdbb84',
          60,
          '#fc8d59',
          75,
          '#ef6548',
          90,
          '#d7301f',
          100,
          '#990000'
        ],
        'fill-opacity':0.6,
        'fill-outline-color':'#fff'
      }
    }
  },

  // Unemployment Rate
  'Unemployment Rate':{
    'State':{
      id: 'state',
      type: 'fill',
      source: 'state',
      paint: {
        'fill-color': [
          'interpolate',
          ['linear'],
          ['get', 'Rate'],
          0,
          '#F2F12D',
          1,
          '#fee8c8',
          2,
          '#fdd49e',
          3,
          '#fdbb84',
          4,
          '#fc8d59',
          5,
          '#ef6548',
          6,
          '#d7301f',
          7,
          '#990000'
        ],
        'fill-opacity':0.6,
        'fill-outline-color':'#fff'
      }
    },
    'County':{
      id: 'county',
      type: 'fill',
      source: 'county',
      paint: {
        'fill-color': [
          'interpolate',
          ['linear'],
          ['get', 'Rate'],
          0,
          '#F2F12D',
          1,
          '#fee8c8',
          2,
          '#fdd49e',
          3,
          '#fdbb84',
          4,
          '#fc8d59',
          5,
          '#ef6548',
          6,
          '#d7301f',
          7,
          '#990000'
        ],
        'fill-opacity':0.6,
        'fill-outline-color':'#fff'
      }
    }
  },

  'Tax Rate':{
    'State':{
      id: 'state',
      type: 'fill',
      source: 'state',
      paint: {
        'fill-color': [
          'interpolate',
          ['linear'],
          ['get', 'Top Tax Rate'],
          0,
          '#F2F12D',
          0.01,
          '#fee8c8',
          0.02,
          '#fdd49e',
          0.03,
          '#fdbb84',
          0.04,
          '#fc8d59',
          0.05,
          '#ef6548',
          0.06,
          '#d7301f',
          0.07,
          '#990000'
        ],
        'fill-opacity':0.6,
        'fill-outline-color':'#fff'
      }
    },
    'County':{
      id: 'county',
      type: 'fill',
      source: 'county',
      paint: {
        'fill-color': [
          'interpolate',
          ['linear'],
          ['get', 'Top Tax Rate'],
          0,
          '#F2F12D',
          0.01,
          '#fee8c8',
          0.02,
          '#fdd49e',
          0.03,
          '#fdbb84',
          0.04,
          '#fc8d59',
          0.05,
          '#ef6548',
          0.06,
          '#d7301f',
          0.07,
          '#990000'
        ],
        'fill-opacity':0.6,
        'fill-outline-color':'#fff'
      }
    }
  }

}