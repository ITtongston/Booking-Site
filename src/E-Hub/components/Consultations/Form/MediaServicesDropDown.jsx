import React from "react";
import styled from "styled-components";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const MediaServicesDropDown = ({ values, onHandleChange }) => {
  return (
    <div>
      <FormControl sx={{ m: 1, width: 150 }}>
        <InputLabel sx={{ fontWeight: "bold" }} htmlFor="grouped-native-select">
          Media Service
        </InputLabel>
        <Select
          native
          id="grouped-native-select"
          label="Media Service of Interest"
          name="mediaService"
          onChange={onHandleChange}
          value={values.mediaService}
        >
          <option aria-label="None" value="" />
          <optgroup label="BRANDING">
            <option value="Website Design & Dev">Website Design & Dev</option>
            <option value="Brand Identity & Value Design mission, vision, story, positioning, messaging">
              Brand Identity & Value Design mission, vision, story, positioning,
              messaging
            </option>
            <option value="Corporate Brand Design & Print">
              Corporate Brand Design & Print
            </option>
            <option value="Web Management">Web Management</option>
          </optgroup>
          <optgroup label="DIGITAL MARKETING">
            <option value="Content Writing">Content Writing</option>
            <option value="Social Media Marketing">
              Social Media Marketing
            </option>
            <option value="Full Service Digital Marketing">
              Full Service Digital Marketing
            </option>
          </optgroup>
          <optgroup label="MEDIA">
            <option value="Pre-production (Scripting, Planning & Directing)">
              Pre-production (Scripting, Planning & Directing)
            </option>
            <option value="Production">
              Production (In studio Live Video/Audio recordings, covers and
              jingles, 2D Animation. indoor/outdoor photography.)
            </option>
            <option value="Post-Production (Mixing & Mastering Audio, Photo/video Editing	)">
              Post-Production (Mixing & Mastering Audio, Photo/video Editing)
            </option>
            <option value="Media Consulting">Media Consulting</option>
            <option value="Virtual and in-person event planning and management">
              Virtual and in-person event planning and management
            </option>
          </optgroup>
          <optgroup label="CORPORATE COMMUNICATIONS & PR">
            <option value="Design Written Communications & Press Releases">Design Written Communications & Press Releases</option>
            <option value="Design Pitch Books & Investor Pitch Decks">
            Design Pitch Books & Investor Pitch Decks
            </option>
            <option value="Design Presentations">
            Design Presentations
            </option>
          </optgroup>
        </Select>
      </FormControl>
    </div>
  );
};

export default MediaServicesDropDown;
