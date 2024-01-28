/* eslint-disable no-unused-vars */
import AddressLink from "../AddressLink/AddressLink";
import "../ContactCard/ContactCard.scss";

/* eslint-disable react/prop-types */
export default function ContactCard({ icon, children }) {
  return (
    <div className="contact-card">
      <span>{icon}</span>
      <address>{children}</address>
    </div>
  );
}
