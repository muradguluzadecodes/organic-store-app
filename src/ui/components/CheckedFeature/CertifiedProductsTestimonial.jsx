import TestimonialCard from "../TestimonialCard/TestimonialCard";
import "../CheckedFeature/CertifiedProductsTestimonial.scss";
import "../../../scss/_utils.scss";

export default function CertifiedProductsTestimonial() {
  return (
    <div className="certified-products-testimonial">
      <div className="certified-products-testimonial__img-box">
        <img src="farming-slide-01.jpg" />
      </div>
      <TestimonialCard />
    </div>
  );
}
