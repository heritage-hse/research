import Map, {
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  Source,
  Layer,
} from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useState, useRef, useCallback } from "react";
import { Section } from "../../section/section";
// import hse from '../../asserts/images/hse_logo.png'
import cities from "./data/cities.geojson";

export const MapComponent = () => {
  const mapRef = useRef(null);
  const [hoverInfo, setHoverInfo] = useState(null);

  const MAP_TILER_KEY = "hE7PBueqYiS7hKSYUXP9";

  const layerStyle = {
    id: "sign",
    type: "symbol",

    paint: {
      "text-halo-color": "#FBF8F3",
      "text-halo-width": 10,
      "text-color": "#112D69",
    },

    layout: {
      "icon-allow-overlap": true,
      "text-allow-overlap": true,
      "text-field": ["get", "City"],
      "text-offset": [0, 1.25],
      "text-anchor": "top",
      "text-transform": "uppercase",
      "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
    },
  };
  const layerStyle2 = {
    id: "point",
    type: "circle",

    paint: {
      "circle-radius": 10,
      "circle-color": "#2651A6",
      "circle-stroke-color": "#fff",
      "circle-stroke-width": 2,
    },
  };

  const onHover = useCallback((event) => {
    const {
      features,
      point: { x, y },
    } = event;
    const hoveredFeature = features && features[0];

    // prettier-ignore
    setHoverInfo(hoveredFeature && {feature: hoveredFeature, x, y});
  }, []);

  return (
    <Section title="География исследования">
      <Map
        mapLib={maplibregl}
        mapStyle={`https://api.maptiler.com/maps/voyager/style.json?key=${MAP_TILER_KEY}`}
        style={{
          width: "80%",
          height: "550px",
          margin: "auto",
          borderRadius: "20px",
        }}
        onMouseMove={onHover}
        interactiveLayerIds={["cities"]}
        initialViewState={{
          latitude: 60.282,
          longitude: 47.0682,
          zoom: 4,
          minZoom: 3,
          maxZoom: 5,
        }}
        ref={mapRef}
      >
        <FullscreenControl />
        <NavigationControl />
        <ScaleControl />
        <Source type="geojson" data={cities}>
          <Layer {...layerStyle} />
          <Layer {...layerStyle2} />
        </Source>

        {hoverInfo && (
          <div
            className="tooltip"
            style={{ left: hoverInfo.x, top: hoverInfo.y }}
          >
            <div>State: {hoverInfo.feature.properties.name}</div>
            <div>
              Median Household Income: {hoverInfo.feature.properties.value}
            </div>
            <div>
              Percentile: {(hoverInfo.feature.properties.percentile / 8) * 100}
            </div>
          </div>
        )}

        {/* <Source id="my-data" type="geojson" data={cities}>
          <Layer {...layerStyle} />
        </Source> */}
      </Map>
    </Section>
  );
};
