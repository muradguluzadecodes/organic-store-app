/* eslint-disable react/prop-types */
import { formatCurrency } from "../../../lib/utils";
// import Heading from "../Heading/Heading";

import "../ProductCard/ProductCard.scss";

import ColFourItems from "../Cols/ColFourItems";
import Stars from "../Stars/Stars";

export default function ProductCard({ image, name, category, price, sale }) {
  return (
    <ColFourItems>
      <div className="product-card">
        <div className="product-card__img-box">
          <img src={image} alt="" />
        </div>
        <div className="product-card__content-box">
          <p className="category">{category}</p>
          <p className="product-name">{name}</p>
          <Stars filled={true} size={16} />
          <p className="price">{formatCurrency(price)}</p>
        </div>
        {sale && (
          <div className="sale">
            <p>Sale!</p>
          </div>
        )}
      </div>
    </ColFourItems>
  );
}
