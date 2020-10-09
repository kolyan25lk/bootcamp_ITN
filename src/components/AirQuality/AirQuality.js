import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './AirQuality.scss';

mapboxgl.accessToken = 'pk.eyJ1Ijoia29seWFuMjVsayIsImEiOiJja2ZwdmJib28wOThkMzNycHp0ZTF2aG5lIn0.1hPHVj5MHUlF1OXTXpJ_FA';

function AirQuality() {
    const mapContainer =useRef(null);
    const [LocationInfo, setLocationInfo] = useState({
        lng: 31,
        lat: 48.3,
        zoom: 4.6,
    });

    useEffect(() => {
        console.log(mapContainer);
        const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/outdoors-v11',
        center: [LocationInfo.lng, LocationInfo.lat],
        zoom: LocationInfo.zoom
        });
        },[]) 


    return (
        <section className={'air-q container'}>
            <h2 className = "air-q-title">Индекс качества воздуха в режиме реального времени</h2>
            <div className="air-q-map" ref={mapContainer}/>
            <p className = "air-q-text">Для того чтобы узнать уровень загрязнения атмосферного воздуха (качество воздуха) в городе Киев, необходимо выбрать соответствующую станцию мониторинга на карте выше.</p>

        </section>
    )
}

export default AirQuality
