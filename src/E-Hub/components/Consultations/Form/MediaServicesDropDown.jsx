import React from 'react'
import styled from "styled-components";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";



const MediaServicesDropDown = () => {
  return (
    <div>
        <FormControl sx={{ m: 1, width: 200 }}>
          <InputLabel htmlFor="grouped-native-select">
            Media Service
          </InputLabel>
          <Select
            native
            id="grouped-native-select"
            label="Media Service of Interest"
            name="mediaService"
            onChange={handleOnchange}
            value={values.mediaService}
          >
            <option aria-label="None" value="" />
            <optgroup label="Branding">
              <option value='Brand Identity and Value Design'>Brand Identity and Value Design</option>
              <option value='Brand Mission and Vision'>Brand Mission and Vision</option>
              <option value='Brand Story and Messaging'>Brand Story and Messaging</option>
              <option value='Corporate Branding Design & Printing (Fliers,Brochures,Logos and
                other media materials.)'>
                Corporate Branding Design & Printing (Fliers,Brochures,Logos and
                other media materials.)
              </option>
            </optgroup>
            <optgroup label="Digital Marketing">
              <option value='Social media marketing'>Social media marketing</option>
              <option value='Content Writing'>Content Writing</option>
            </optgroup>
            <optgroup label="Pre-Production">
              <option value='Scripting, Planning and Directing'>Scripting, Planning and Directing</option>
            </optgroup>
            <optgroup label="Production">
              <option value='In studio Live Video recordings, covers and jingles'>
                In studio Live Video recordings, covers and jingles
              </option>
              <option value='In studio Live Audio recordings, covers and jingles'>
                In studio Live Audio recordings, covers and jingles
              </option>
              <option value='2D Animation'>2D Animation</option>
              <option value='Podcast'>Podcast</option>
              <option value='Outdoor Recording'>Outdoor Recording</option>
              <option value='Event and Indoor Photography'>Event and Indoor Photography</option>
            </optgroup>
            <optgroup label="Post-Production">
              <option value='Mixing and Mastering of audio'>Mixing and Mastering of audio</option>
              <option value='Video Editing'>Video Editing</option>
              <option value='Color Grading and Special Effects'>Color Grading and Special Effects</option>
            </optgroup>
            <optgroup label="Web Design & Development">
              <option value='Website management'>Website management</option>
              <option value='Website design and development'>Website design and development</option>
            </optgroup>
          </Select>
        </FormControl>
    </div>
  )
}

export default MediaServicesDropDown