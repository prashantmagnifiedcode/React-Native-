import React, { useState } from "react";
import ReactPlayer from "react-player";
import Button from "@material-ui/core/Button";
import { exampleCode, codes, codes1 } from "./codecontent";
import Codeshows from "./Codeshow";
import Contentpart from "./Reactcontent";
import Linuxs from "./linux.js";
import Card from "./card";

const Content = () => {
  const [show, setshow] = useState({ Reactt: false, Linux: false });
  const [name,setname]= useState("SHOW CONTENT")

  return (
    <>
    <div className="content1"> 

      <div className="content">
        <div className="headercontent">
          <h5>Amazing Content(Crystal Clear)</h5>
        </div>
        <div className="videocontent">
          <div className="youtubev">
            <div className="video">
              <ReactPlayer
                height="100%"
                width="100%"
                url="https://youtu.be/WtospDD4uIQ"
              />
            </div>
            <div className="description">
              <p>
                It will fill you entirely with thrill and
                code............................... #coding attraction ........
              </p>
            </div>
          </div>
          <div className="youtubev">
            <div className="video">
              <ReactPlayer
                height="100%"
                width="100%"
                url="https://youtu.be/Ox_yLW8P38g"
              />
            </div>
            <div className="description">
              <p>
                The Fantastic designed Music player using the pure HTML CSS
                javascript
              </p>
            </div>
          </div>
          <div className="youtubev">
            <div className="video">
              <ReactPlayer
                height="100%"
                width="100%"
                url="https://youtu.be/e0fz0vix7FU"
                />
            </div>
            <div className="description">
              <p>
                Youtube clone application Deploying on Expo , Now available for
                downloading process
              </p>
            </div>
          </div>
        </div>
        <div className="showbutton">
          <div>React js content</div>

          <Button
            className="showcontentbutton"
            onClick={() => setshow({ ...show, Reactt: !show.Reactt })}
          >
            {show.Reactt?"HIDE CONTENT":"SHOW CONTENT"}
          </Button>
        </div>
        <div className="showbutton">
          <div>Linux Commands</div>

          <Button
            className="showcontentbutton"
            onClick={() => setshow({ ...show, Linux: !show.Linux })}
            >
            {show.Linux?"HIDE CONTENT":"SHOW CONTENT"}
          </Button>
        </div>
        <div className="showbutton">
          <div>React Native</div>

          <Button className="showcontentbutton" onClick={() => setshow(!show)}>
          {show.Reactnative?"HIDE CONTENT":"SHOW CONTENT"}
          </Button>
        </div>
        <div className="showbutton">
          <div>Next JS</div>

          <Button className="showcontentbutton" onClick={() => setshow(!show)}>
          {show.Reactnative?"HIDE CONTENT":"SHOW CONTENT"}
          </Button>
        </div>
        <div className="showbutton">
          <div>Python</div>

          <Button className="showcontentbutton" onClick={() => setshow(!show)}>
          {show.Reactnative?"HIDE CONTENT":"SHOW CONTENT"}
          </Button>
        </div>
        <div className="showbutton">
          <div>Docker</div>

          <Button className="showcontentbutton" onClick={() => setshow(!show)}>
          {show.Reactnative?"HIDE CONTENT":"SHOW CONTENT"}
          </Button>
        </div>
        <div className="showbutton">
          <div>...</div>

          <Button className="showcontentbutton" onClick={() => setshow(!show)}>
          {show.Reactnative?"HIDE CONTENT":"SHOW CONTENT"}
          </Button>
        </div>
        {show.Reactt ? <Contentpart /> : null}
        {show.Linux ? <Linuxs /> : null}
       
        <div className="contentfooter">
         
            Prashant Srivastava
          
        </div>
     
      </div>
            </div>
    </>
  );
};
export default Content;
