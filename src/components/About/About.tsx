import React from "react";
import SkillCard from "./SkillCard";
import styles from "@/styles/About.module.css"; // CSS module
import { FrontEndSkills } from "@/data/FrontEndSkills";
import { BackEndSkills } from "@/data/BackEndSkills";
import { DatabaseSkills } from "@/data/DatabaseSkills";
import { CloudSkills } from "@/data/CloudSkills";
import { ToolSkills } from "@/data/ToolSkills";
import { MobileSkills } from "@/data/MobileSkills";
import { GameSkills } from "@/data/GameSkills";
import { APISkills } from "@/data/APISkills";

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.skillsSection}>
        <h2 className={styles.skillsTitle}>Front-End Skills</h2>
        <div className={styles.skillsWrapper}>
          {FrontEndSkills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} image={skill.image} />
          ))}
        </div>
      </div>

      <div className={styles.skillsSection}>
        <h2 className={styles.skillsTitle}>Tool Skills</h2>
        <div className={styles.skillsWrapper}>
          {ToolSkills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} image={skill.image} />
          ))}
        </div>
      </div>
      
      <div className={styles.skillsSection}>
        <h2 className={styles.skillsTitle}>Back-End Skills</h2>
        <div className={styles.skillsWrapper}>
          {BackEndSkills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} image={skill.image} />
          ))}
        </div>
      </div>

      <div className={styles.skillsSection}>
        <h2 className={styles.skillsTitle}>Database Skills</h2>
        <div className={styles.skillsWrapper}>
          {DatabaseSkills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} image={skill.image} />
          ))}
        </div>
      </div>

      <div className={styles.skillsSection}>
        <h2 className={styles.skillsTitle}>Cloud Skills</h2>
        <div className={styles.skillsWrapper}>
          {CloudSkills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} image={skill.image} />
          ))}
        </div>
      </div>

      <div className={styles.skillsSection}>
        <h2 className={styles.skillsTitle}>Game Skills</h2>
        <div className={styles.skillsWrapper}>
          {GameSkills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} image={skill.image} />
          ))}
        </div>
      </div>

      <div className={styles.skillsSection}>
        <h2 className={styles.skillsTitle}>Mobile Skills</h2>
        <div className={styles.skillsWrapper}>
          {MobileSkills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} image={skill.image} />
          ))}
        </div>
      </div>
      <div className={styles.skillsSection}>
        <h2 className={styles.skillsTitle}>API Skills</h2>
        <div className={styles.skillsWrapper}>
          {APISkills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} image={skill.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
