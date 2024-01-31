import "../Sort/Sort.scss";

export default function Sort() {
  return (
    <div className="products-sort">
      <p>Showing X-X of X results</p>
      <select name="sort" id="sort">
        <option value="name-asc">Sort by name A-Z</option>
        <option value="name-desc">Sort by name Z-A</option>
        <option value="regularPrice-asc">Sort by prize: low first</option>
        <option value="regularPrice-desc">Sort by prize: high first</option>
        <option value="popularity">Sort by price: high to low</option>
      </select>
    </div>
  );
}
