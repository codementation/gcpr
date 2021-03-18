import React from 'react';
import PropTypes from 'prop-types';
import ForensicsSVG from '../images/vector/gcpr-forensics.svg';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

export default function ForensicContent({ props }) {
    return (
        <div className="flex flex-row flex-wrap items-center justify-between p-4 mx-auto 2xl:max-w-6xl xl:max-w-5xl lg:max-w-4xl md:max-w-3xl">
            <div className="flex flex-col justify-center w-full">
                <div className="flex flex-row flex-wrap w-full md:mt-20 place-content-center">
                    <div className="flex flex-col float-left md:w-3/4 lg:w-1/2">
                        <div className="pb-2 text-4xl font-semibold md:ml-1">
                            {props.section1.title}
                        </div>
                        <div className="pb-8 text-xl md:ml-1">
                            <ReactMarkdown
                                plugins={[gfm]}
                                children={props.section1.body}
                            />
                        </div>
                        <div className="pb-2 text-4xl font-semibold md:ml-1">
                            {props.section2.title}
                        </div>
                        <div className="pb-8 text-xl md:ml-1 ">
                            <ReactMarkdown
                                plugins={[gfm]}
                                children={props.section2.body}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col float-right">
                        <div className="pt-20 pb-20">
                            <ForensicsSVG className="w-full" />
                        </div>
                        <div className="pb-2 ml-12 text-4xl font-semibold">
                            {props.section3.title}
                        </div>
                        <div className="pb-8 ml-12 text-xl">
                            <ReactMarkdown
                                plugins={[gfm]}
                                children={props.section3.body}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ForensicContent.propTypes = {
    props: PropTypes.object,
};
