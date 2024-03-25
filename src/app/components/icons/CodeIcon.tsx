import React from "react";

interface Props {
    remSize: string;
}

export default function CodeIcon({ remSize }: Props) {
    return (
        <svg
            width={remSize}
            height={remSize}
            viewBox="0 0 76 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M52.9779 21.2278C54.1982 20.0074 56.1769 20.0074 57.3972 21.2278L71.4597 35.2903C72.68 36.5106 72.68 38.4894 71.4597 39.7097L57.3972 53.7722C56.1769 54.9925 54.1982 54.9925 52.9779 53.7722C51.7575 52.5519 51.7575 50.5731 52.9779 49.3528L64.8307 37.5L52.9779 25.6472C51.7575 24.4268 51.7575 22.4482 52.9779 21.2278Z"
                fill="#FF7373"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.0222 21.2278C24.2426 22.4482 24.2426 24.4268 23.0222 25.6472L11.1694 37.5L23.0222 49.3528C24.2426 50.5731 24.2426 52.5519 23.0222 53.7722C21.8018 54.9925 19.8232 54.9925 18.6028 53.7722L4.54028 39.7097C3.31991 38.4894 3.31991 36.5106 4.54028 35.2903L18.6028 21.2278C19.8232 20.0074 21.8018 20.0074 23.0222 21.2278Z"
                fill="#5699E9"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.7131 9.58232C50.3247 10.2007 51.1294 12.0082 50.5112 13.6195L31.3237 63.6196C30.7053 65.2308 28.8978 66.0358 27.2865 65.4174C25.6752 64.7989 24.8702 62.9914 25.4886 61.3802L44.6759 11.3803C45.2944 9.76894 47.1019 8.96397 48.7131 9.58232Z"
                fill="#5699E9"
            />
        </svg>
    );
}
