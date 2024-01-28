/* eslint-disable react/prop-types */
export default function AddressLink({ phone = "", email = "", location = "" }) {
  return (
    <>
      {phone && <a href={`tel: ${phone}`}>{phone}</a>}
      {email && <a href={`mailto: ${email}`}>{email}</a>}
      {location && <span>{location}</span>}
    </>
  );
}
