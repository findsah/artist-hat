import React from "react";
import "./ArtistCheckBox.css";

const ArtistCheckBox = ({signupHandleChange,signupData,usedFor}) => {
  return (
    <label className="checkboxMain">
      <input
        type="checkbox"
        value={usedFor==='terms_and_conditions'?signupData.terms_and_conditions:signupData.send_no_email}
        onChange={(e) =>
          signupHandleChange(e,'checkBox')
        }
        name={usedFor==='terms_and_conditions'?'terms_and_conditions':"send_no_email"}
      />
      <span className="geekmark"></span>
    </label>
  );
};

export default ArtistCheckBox;
