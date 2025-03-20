import s from "./product.module.css";

const ProductSliderBtn = ({ onClick }) => {
  return (
    <button className={s["main-slider__btn"]} onClick={onClick}>
      <svg width="10" height="18" viewBox="0 0 10 18">
        <path
          d="M9.16634 17.3335L0.833007 9.00016L9.16634 0.666829L9.16634 17.3335Z"
          fill="url(#paint0_linear_711_22243)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_711_22243"
            x1="4.99967"
            y1="17.3335"
            x2="4.99967"
            y2="0.66683"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#53CFFF" />
            <stop offset="1" stopColor="#32B2E4" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
};

export default ProductSliderBtn;
