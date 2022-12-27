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
import { Section } from "../section/section";
import cities from "./data/cities.geojson";

export const MapComponent = () => {
  const mapRef = useRef(null);
  const [hoverInfo, setHoverInfo] = useState(null);

  const MAP_TILER_KEY = "hE7PBueqYiS7hKSYUXP9";

  const layerStyle = {
    id: "point",
    type: "circle",
    paint: {
      "circle-radius": 10,
      "circle-color": "#234A9A",
    },
    // layout: {
    //   "text-field": ["get", "City"],
    //   "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
    //   "text-offset": [0, 1.25],
    //   "text-anchor": "top",
    // },
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
        style={{ width: "80%", height: "550px", margin: "auto" }}
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
