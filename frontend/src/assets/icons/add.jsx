const AddIcon = ({ color = 'black' }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_6_3)">
        <path fillRule="evenodd" clipRule="evenodd" d="M7.99997 0.952026C7.52146 0.952026 7.13354 1.33994 7.13354 1.81845V7.13357H1.81845C1.33994 7.13357 0.952026 7.52149 0.952026 8C0.952026 8.47851 1.33994 8.86642 1.81845 8.86642H7.13354V14.1815C7.13354 14.6601 7.52146 15.048 7.99997 15.048C8.47848 15.048 8.86639 14.6601 8.86639 14.1815V8.86642H14.1815C14.6601 8.86642 15.048 8.47851 15.048 8C15.048 7.52149 14.6601 7.13358 14.1815 7.13358H8.86639V1.81845C8.86639 1.33994 8.47848 0.952026 7.99997 0.952026Z" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0_6_3">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default AddIcon;