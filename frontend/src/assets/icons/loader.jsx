const Loader = ({color}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width="236"
      height="236"
      style={{ shapeRendering: 'auto', display: 'block', background: 'transparent' }}
    >
      <g>
        <circle
          strokeDasharray="127.23450247038662 44.411500823462205"
          r="27"
          strokeWidth="16"
          stroke={color}
          fill="none"
          cy="50"
          cx="50"
        >
          <animateTransform
            keyTimes="0;1"
            values="0 50 50;360 50 50"
            dur="0.78125s"
            repeatCount="indefinite"
            type="rotate"
            attributeName="transform"
          />
        </circle>
      </g>
    </svg>
  );
};

export default Loader;
