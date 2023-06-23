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
  }
}