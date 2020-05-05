import React from "react";
import "./style.css";
import ShortHeader from "./shortheader";
import BlockTitle from "./blocktitle";
import SkillBar from "./skillbar";
import TimelineItem from "./timelineitem";

function ResumeCard(){
  return(
    <div className="info-card">
      <ShortHeader>Resume</ShortHeader>
      <div className="card__content">
        <div className="content__row">
          <div className="content__column">
            <BlockTitle first="Education"/>
            <div className="timeline__container">
              <TimelineItem 
                title="Specialization Course"
                period="2010"
                organization="Apple Inc."
                description="Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor."
              />
                <TimelineItem 
                title="Specialization Course"
                period="2010"
                organization="Apple Inc."
                description="Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor."
              />
                <TimelineItem 
                title="Specialization Course"
                period="2010"
                organization="Apple Inc."
                description="Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor."
              />
            </div>
          </div>
          <div className="content__column">
            <BlockTitle first="Experience"/>
            <div className="timeline__container">
              <TimelineItem 
                title="Frontend-developer"
                period="Dec 2012 - Current"
                organization="Web Agency"
                description="Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor."
              />
                <TimelineItem 
                title="Web Designer"
                period="Dec 2011 - Nov 2012"
                organization="Apple Inc."
                description="Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor."
              />
                <TimelineItem 
                title="Graphic Designer"
                period="Jan 2010 - Dec 2011"
                organization="Apple Inc."
                description="Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor."
              />
            </div>
          </div>
        </div>

        <div className="content__row">
          <div className="content__column">
            <BlockTitle first="Design " second="skills"/>
            <SkillBar name="Web Design" percent="92%" />
            <SkillBar name="Graphic Design" percent="87%" />
            <SkillBar name="Print Design" percent="75%" />
          </div>
          <div className="content__column">
            <BlockTitle first="Coding " second="skills"/>
            <SkillBar name="HTML5" percent="90%" />
            <SkillBar name="CSS3/LESS/SASS" percent="81%" />
            <SkillBar name="jQuery" percent="98%" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default ResumeCard;