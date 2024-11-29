import './styles.css';
import BodyFrame from '@components/body-frame';
import Head from '@components/Head';
import { FaRegCircleXmark } from "react-icons/fa6";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

// Custom component to update map center dynamically
const UpdateMapCenter = ({ center }) => {
    const map = useMap();
    map.setView(center, map.getZoom());
    return null;
};

const Localizacao = () => {
    const [location, setLocation] = useState({
        latitude: -8.05255,  // Default latitude (Recife)
        longitude: -34.88518, // Default longitude (Recife)
    });

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await axios.get('https://ipapi.co/json/');
                console.log('Location:', response.data);
                const { latitude, longitude } = response.data;
                setLocation({ latitude, longitude });
            } catch (error) {
                console.error('Error fetching location:', error);
            }
        };

        fetchLocation();
    }, []);

    return (
        <BodyFrame>
            <Head title="Localização" />
            <a href="/home"><FaRegCircleXmark className='content-icon' /></a>
            <h1 className='center-text'>Minha Localização</h1>
            <div id="map"></div>

            <MapContainer 
                center={[location.latitude, location.longitude]} 
                zoom={13} 
                style={{ borderRadius: "10px", marginTop: "10px", marginLeft: "2%", height: "430px", width: "96%" }}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <UpdateMapCenter center={[location.latitude, location.longitude]} />
                <Marker position={[location.latitude, location.longitude]}>
                    <Popup>Você está aqui! {[location.latitude, location.longitude]}</Popup>
                </Marker>
            </MapContainer>
        </BodyFrame>
    );
};

export default Localizacao;
