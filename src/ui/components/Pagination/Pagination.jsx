/* eslint-disable react/prop-types */
import { useState } from "react";
import "../Pagination/Pagination.scss";
import PaginationButton from "./PaginationButton";

export default function Pagination() {
  const [isActive, setIsActive] = useState(true);

  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <div className="pagination">
      <PaginationButton>1</PaginationButton>
      <PaginationButton onClick={handleClick} isActive={isActive}>
        2
      </PaginationButton>
      <PaginationButton>&rarr;</PaginationButton>
    </div>
  );
}
