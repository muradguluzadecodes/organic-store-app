// import { Col } from "react-bootstrap";

import MainDescription from "../MainDescription/MainDescription";
import Section from "../Section/Section";
import "../../../scss/_utils.scss";
// import ColTwoItems from "../Cols/ColTwoItems";

export default function MainAboutSection() {
  return (
    <Section hasLeaf={true} color="bg-white">
      <MainDescription heading="We Are Your Favourite Store.">
        <p>
          Tuas quisquam quo gravida proident harum, aptent ligula anim
          consequuntur, ultrices mauris, nunc voluptates lobortis, varius,
          potenti placeat! Fuga omnis. Cubilia congue. Recusandae. Vero
          penatibus quasi! Nostra tenetur dignissimos ultrices natus distinctio
          ultrices consequuntur numqu.
        </p>
        <p>
          Officiis fuga harum porro et? Similique rhoncus atque! Netus
          blanditiis provident nunc posuere. Rem sequi, commodo, lorem tellus
          elit, hic sem tenetur anim amet quas, malesuada proident platea
          corrupti expedita.
        </p>
      </MainDescription>
    </Section>
  );
}
