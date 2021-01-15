import React from 'react';
import PropTypes from 'prop-types';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { AppContext } from './provider';

export const MapContainer = (props) => {
    console.log(props.google);
    return (
        <section id="map">
            <AppContext.Consumer>
                {(context) => (
                    <Map
                        google={props.google}
                        zoom={14}
                        initialCenter={{
                            lat: 30.30327457673613,
                            lng: -87.68379330633275,
                        }}
                    >
                        <Marker
                            position={{
                                lat: 30.30327457673613,
                                lng: -87.68379330633275,
                            }}
                            onClick={(...props) => {
                                context.setShowInfo(!context.showInfo);
                                context.setMarker(props[1]);
                            }}
                            onClick={(...props) => {
                                context.setShowInfo(!context.showInfo);
                                context.setMarker(props[1]);
                            }}
                            name={'Gulf Coast Phone Repair!'}
                        />
                        <InfoWindow
                            visible={context.showInfo}
                            marker={context.marker}
                            onClose={() => context.setShowInfo(false)}
                        >
                            <div>
                                <h4>Gulf Coast Phone Repair</h4>
                                <h2>
                                    3817 Gulf Shores Pkwy STE 4, Gulf Shores, AL
                                    36542, USA
                                </h2>
                            </div>
                        </InfoWindow>
                    </Map>
                )}
            </AppContext.Consumer>
            ;
        </section>
    );
};

MapContainer.propTypes = {
    google: PropTypes.any,
};

export default GoogleApiWrapper({
    apiKey: `${process.env.GATSBY_GOOGLE_API_KEY}`,
})(MapContainer);
