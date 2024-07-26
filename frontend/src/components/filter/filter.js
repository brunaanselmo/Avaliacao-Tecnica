import React, { useState } from "react";
import "./style.css";
import { VscFilter } from "react-icons/vsc";

class Filter extends React.Component {
  render() {
    const [showFilter, setShowFilter] = useState(false);

    const handleFilterClick = () => {
      setShowFilter(!showFilter);
    };

    return (
      <div className="filter-container">
        <VscFilter onClick={handleFilterClick} className="filter-icon" />
        {showFilter && (
          <div className="filter-fields">
            <label>
              Empresa:
              <input type="text" name="empresa" />
            </label>
            <label>
              Setor:
              <input type="text" name="setor" />
            </label>
          </div>
        )}
      </div>
    );
  }
}

export default Filter;
