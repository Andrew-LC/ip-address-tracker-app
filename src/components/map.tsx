import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import { Icon } from 'leaflet'
import { useRecoilValue } from 'recoil';
import { positionState } from "../recoil/states"

const customIcon = new Icon({
    iconUrl: "/icon-location.svg",
    iconSize: [40, 50]
})

function MyComponent() {
    const map = useMap();
    const currentPosition = useRecoilValue(positionState);
    if (currentPosition.length !== 0) {
        map.setView([currentPosition[0], currentPosition[1]]);
        return <Marker icon={customIcon} position={[currentPosition[0], currentPosition[1]]}></Marker>
    }
    return <Marker icon={customIcon} position={[currentPosition[0], currentPosition[1]]}></Marker>
}


export default function Map() {
    return (
        <MapContainer center={[34.826106, 135.260176]} zoom={15}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MyComponent />
        </MapContainer>
    );
}




