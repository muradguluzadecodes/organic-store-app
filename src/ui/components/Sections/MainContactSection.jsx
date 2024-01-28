import AddressLink from "../AddressLink/AddressLink";
import ColThreeItems from "../Cols/ColThreeItems";
import ContactCard from "../ContactCard/ContactCard";
import Section from "../Section/Section";
import { MdOutlineMail } from "react-icons/md";
import { MdPhoneEnabled } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

export default function MainContactSection() {
  return (
    <Section hasLeaf={true} color="bg-white">
      <ColThreeItems>
        <ContactCard icon={<MdPhoneEnabled size={38} color="#8bc34a" />}>
          <AddressLink phone="+994 50 796 03 21" />
          <AddressLink phone="+994 50 796 03 21" />
        </ContactCard>
      </ColThreeItems>
      <ColThreeItems>
        <ContactCard icon={<MdOutlineMail size={38} color="#8bc34a" />}>
          <AddressLink email="quluzade.m.98@gmail.com" />
          <AddressLink email="example@gmail.com" />
        </ContactCard>
      </ColThreeItems>
      <ColThreeItems>
        <ContactCard icon={<GrLocation size={38} color="#8bc34a" />}>
          <AddressLink location="1569 Ave, New York," />
          <AddressLink location="NY 10028, USA" />
        </ContactCard>
      </ColThreeItems>
    </Section>
  );
}
