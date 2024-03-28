import { FC } from "react";

interface VoteIconProps {
    color?: string;
}

const VoteIcon: FC<VoteIconProps> = ({ color = "white" }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.2132 11.995V3.62919C11.2132 2.72964 11.9437 2 12.8443 2C13.745 2 14.4755 2.72964 14.4755 3.62919V11.995V5.12844C14.4755 4.22889 15.206 3.49925 16.1066 3.49925C17.0072 3.49925 17.7377 4.22889 17.7377 5.12844V11.995H17.7477V8.52674C17.7477 7.68716 18.4782 6.9975 19.3789 6.9975C20.2695 6.9975 21 7.68716 21 8.52674V16.5027C21 19.5512 18.3882 22 15.1359 22H13.755C12.374 22 11.1432 21.5402 10.1725 20.8506L3.48784 14.6737C2.83739 14.064 2.83739 13.0145 3.48784 12.4048C4.13829 11.7951 5.11897 11.925 5.76942 12.5347L7.95094 14.5137V6.02799C7.95094 5.18841 8.68145 4.49875 9.58207 4.49875C10.4827 4.49875 11.2132 5.18841 11.2132 6.02799V12.075"
                stroke={color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default VoteIcon;
