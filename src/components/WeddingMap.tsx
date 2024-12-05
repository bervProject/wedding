import { APIProvider, AdvancedMarker, Map } from '@vis.gl/react-google-maps';

export default function WeddingMap()
{
    return (<section className="hero is-light is-halfheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="subtitle">Gereja Sidang Jemaat Kristus</p>
            <p>JL. Katapang No.11, Malabar, Kec. Lengkong, Kota Bandung, Jawa Barat 40262</p>
            <APIProvider apiKey={process.env.REACT_APP_MAP_API_KEY ?? ''}>
              <Map
                style={{ width: '100%', height: '80vh', margin: '10px' }}
                defaultCenter={{ lat: -6.921856880187988, lng: 107.61971282958984 }}
                defaultZoom={20}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                mapId="wedding_loc"
              >
                <AdvancedMarker
                  key="gsjk"
                  position={{ lat: -6.921856880187988, lng: 107.61971282958984 }}>
                </AdvancedMarker>
              </Map>
            </APIProvider>
          </div>
        </div>
      </section>);
}