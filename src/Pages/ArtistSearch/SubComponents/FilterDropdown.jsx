import { Slider } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "../../../Components/button/button";

const FilterDropdown = () => {
  const [toggle, setToggle] = useState(false)
  const [range, setRange] = React.useState(30);
  const [price, setPrice] = useState(3000);
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1919px)").matches
  )
  useEffect(() => {
    window
      .matchMedia("(max-width: 1919px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  const handleChange = (e, flag) => {
    if (flag === 'area') {
      setRange(e.target.value);
    } else {
      setPrice(e.target.value)
    }
  };
  const toggleFilter = (e) => {
    setToggle(!toggle);
  }
  return (
    <div>
      <div className="my-3">
        <div id="cars" name="cars" className="artistSearchFilterDropdown" onClick={toggleFilter}>
        </div>
        {toggle &&
          <div value="volvo" className="filterWrap">
            <div className="filterFlag">{range}KM Toronto</div>
            <Slider aria-label="Volume" value={range} onChange={(e) => handleChange(e, 'area')} />
            <div className="filterFlag">${price}-$10,000</div>
            <Slider aria-label="Volume" value={price} onChange={(e) => handleChange(e, 'price')} min={10}
              max={10000} />
            <div className="buttons">
              <Button color='#fff'
                textColor='#523105'
                text='CANCEL'
                padding='6px'
                height={`${matches ? '45px' : '67px'}`}
                width='45%'
                fontSize={`${matches ? '10px' : '15px'}`}
                fontWeight='900'
                border='1.5px solid #B4B4B5' />

              <Button color='#fed12f'
                textColor='#523105'
                text='APPLY'
                padding='6px'
                height={`${matches ? '45px' : '67px'}`}
                width='45%'
                fontSize={`${matches ? '10px' : '15px'}`}
                fontWeight='900'
                border='1.5px solid #B4B4B5' />
            </div>
          </div>}
      </div>
    </div>
  );
};

export default FilterDropdown;
