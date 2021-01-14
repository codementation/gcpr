import React from 'react';
import PropTypes from 'prop-types';
import CallButton from '../images/vector/click-to-call-button.svg'
import {
    View,
    Linking,
    Platform,
    TouchableOpacity,
} from 'react-native';

export default function ContactCard ({ props }) {
    function makeCall(phone_number) {
        let phoneNumber = '';

        if (Platform.OS === 'android') {
            phoneNumber = `tel:${phone_number}`;
        } else {
            phoneNumber = `telprompt:${phone_number}`;
        }
        console.log(phoneNumber)

        Linking.openURL(phoneNumber);
    }

    return (
        <div className="flex flex-col mt-3 text-center justify-items-center xxs:w-full xxs:space-y-5 md:space-y-16">
            <div className="mx-2 font-semibold xxs:mx-12 xxs:text-xl xs:text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl">
                <p>{props.heading}</p>
            </div>
            <div className="xxs:text-lg xs:text-xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                <span className="font-extrabold ">
                    {props.phone_number}
                </span>
            </div>
            <View>
                <TouchableOpacity
                    onPress={() => makeCall(props.phone_number)}
                    activeOpacity={0.4}
                    className="self-center"
                >
                    <CallButton className="self-center 2xl:h-24 xl:h-20 lg:h-16 md:h-14 xs:h-12 xxs:h-12" />
                </TouchableOpacity>
            </View>
        </div>
    );
};

ContactCard.propTypes = {
    props: PropTypes.object,
    heading: PropTypes.string,
    phone_number: PropTypes.string,
};
