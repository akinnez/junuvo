import React from 'react';

export interface SpinnerProps extends React.SVGAttributes<SVGElement> {
    size?: 'sm' | 'md' | 'lg';
    color?: string;
}
  

const sizeMap= {
    sm: 16,
    md: 20,
    lg: 24,
};
const Spinner: React.FC<SpinnerProps> = ({
    size = 'md',
    color = '#fff',
}) => (
    <svg
        width={sizeMap[size]}
        height={sizeMap[size]}
        viewBox="0 0 50 50"
        style={{ display: 'inline-block', verticalAlign: 'middle' }}
        aria-label="Loading"
    >
        <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke={color}
            strokeWidth="5"
            strokeDasharray="90,150"
            strokeLinecap="round"
            style={{
                animation: 'spinner-rotate 1s linear infinite',
            }}
        />
        <style>
            {`
                @keyframes spinner-rotate {
                    100% { transform: rotate(360deg); }
                }
                svg[aria-label="Loading"] circle {
                    transform-origin: 50% 50%;
                }
            `}
        </style>
    </svg>
);

export default Spinner;