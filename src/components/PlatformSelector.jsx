import { useState } from "react";

const PlatformSelector = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleChange = (event) => {
    setSelectedItem(event.target.value);
  };
  return (
    <div>
      <label htmlFor="itemSelect">select an item</label>
      <select id="itemSelect" value={selectedItem} onChange={handleChange}>
        <option value="">--Choose an Item--</option>
        <option value="item1">item1</option>
        <option value="item2">item2</option>
        <option value="item3">item3</option>
      </select>
    </div>
  );
};
export default PlatformSelector;
