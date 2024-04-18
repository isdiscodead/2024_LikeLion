import { useEffect } from 'react';
import Script from '/next/script';
import styles from '../../styles/map.module.scss';

type Props = {
    mapId?: string;
    initialCenter?: Coordinates;
    initialZoom?: number;
    onLoad?: (map: NaverMap) => void;
};

const Map = ({
    mapId = 'map',
    initialCenter = INITIAL_CENTER,
    initialZoom = INITIAL_ZOOM,
    onLoad, 
}: Props) => {
    const mapRef = useRef<NaverMap | null>(null);

    const initializeMap = () => {
        const mapOptions = {
            center: new window.naver.maps.LatLng(...initialCenter),
            zoom: initialZoom,
            minZoom: 9,
        }
    }

    useEffect(() => {
        return () => {
            mapRef.current?.destroy();
        }
    }, []);

    return (
        <>
            <Script 
                strategy='afterInteractive'
                type='text/javascript'
                src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
                onReady={initializeMap}
            />
            <div id={mapId} className={styles.map} />
        </>
    )
}