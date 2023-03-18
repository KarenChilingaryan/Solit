
import { memo, useRef, useState } from "react";
import { useEffect } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

async function getCountryCoordinates(country) {
  const response = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`);
  const data = await response.json();
  const cord = data[0].capitalInfo.latlng;
  return cord;
}

const CustomMarker = () => (
  <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_653_97)">
      <path d="M12.07 23.2855L12.4785 23.694L12.887 23.2855L15.1808 20.9917C19.3529 19.8148 22.415 15.989 22.415 11.4384C22.415 5.9512 17.9657 1.50186 12.4785 1.50186C6.99124 1.50186 2.5419 5.9512 2.5419 11.4384C2.5419 15.989 5.60405 19.8148 9.77616 20.9917L12.07 23.2855Z" fill="white" stroke="white" stroke-width="1.15546" />
      <path d="M12.4785 2.07959C7.31031 2.07959 3.11963 6.27027 3.11963 11.4384C3.11963 15.7747 6.07286 19.4142 10.0764 20.4749L12.4785 22.877L14.8806 20.4749C18.8841 19.4142 21.8373 15.7747 21.8373 11.4384C21.8373 6.27027 17.6466 2.07959 12.4785 2.07959ZM12.4785 4.15933C14.2047 4.15933 15.5981 5.55276 15.5981 7.27895C15.5981 9.00513 14.2047 10.3986 12.4785 10.3986C10.7523 10.3986 9.35885 9.00513 9.35885 7.27895C9.35885 5.55276 10.7523 4.15933 12.4785 4.15933ZM12.4785 19.0295C9.87879 19.0295 7.58067 17.6985 6.23924 15.6811C6.27044 13.6118 10.3987 12.4783 12.4785 12.4783C14.5478 12.4783 18.6865 13.6118 18.7177 15.6811C17.3763 17.6985 15.0781 19.0295 12.4785 19.0295Z" fill="black" fill-opacity="0.5" />
    </g>
    <defs>
      <clipPath id="clip0_653_97">
        <rect width="24.9569" height="24.9569" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const GetCordinates = ({ coord, refs, index }) => {
  const ref = useRef(null)
  const [elem, setElem] = useState(null);

  useEffect(() => {
    if (!refs[index]) {
      // const a = 
      console.log(ref);
    }
  }, [coord, ref])

  return <Marker coordinates={coord} ref={ref}>
    <CustomMarker />
  </Marker>
}


const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
const WorldMap = () => {
  const [coordinatesData, setCoordinatesData] = useState([]);
  const [refs, setRefs] = useState([]);


  const getCordinates = async (coordinates) => {
    const cords = [];
    for (let i = 0; i < coordinates.length; i++) {
      const element = coordinates[i];
      const c = await getCountryCoordinates(element)
      cords.push(c)
    }
    setCoordinatesData(cords)
  }

  useEffect(() => {
    getCordinates(['Canada',
      'Armenia', 'Spain', 'United States', 'South Korea'
    ])
  }, []);

  return <div style={{ position: 'relative' }}>
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} fill={'transparent'} stroke="#25AEF6" strokeWidth={0.5} />
          ))
        }
      </Geographies>

      {
        coordinatesData?.map((el, index) => {
          const arr = [];
          for (let i = 0; i < el.length; i++) {
            let num = Number(el[i]);
            arr.push(num)
          }
          arr.reverse()
          return <GetCordinates coord={el} refs={refs} index={index} />
        }
        )
      }
    </ComposableMap>
  </div>
};

export default memo(WorldMap);

