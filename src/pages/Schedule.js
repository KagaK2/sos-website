import React, { useState } from "react";
import Header from "../components/Header";
import CanvasContent from "../components/CanvasContent";
import Modal from "../components/Modal";
import ScheduleButton from "../components/ScheduleButton";
import WorkshopCard from "../components/WorkshopCard";
import Button from "../components/Button.js";
import styles from "../styles/Schedule.module.scss";
import data from "../data/Workshop.json";

const Schedule = () => {
  console.log(data.firstDay);
  const [modalActive, setModalActive] = useState(false);
  const [workshopType, setWorkshopType] = useState("Tech");
  const [currentSchedule, setCurrentSchedule] = useState("5th");
  const [currentWorkshop, setCurrentWorkshop] = useState({});

  const onModalClick = e => {
    console.log(e.target.className);
    if (e.target.className) {
      if (
        e.target.className.includes("modalContainer") ||
        e.target.className.includes("Modal_icon")
      ) {
        setModalActive(false);
      }
    }
  };
  const sessionRender = array => {
    let renderedRow = array.map(workshop => {
      return (
        <ScheduleButton
          key={workshop.workshopID}
          type={workshop.workshopType}
          title={workshop.workshopTitle}
          onClick={() => {
            setWorkshopType(workshop.workshopType);
            setModalActive(true);
            setCurrentWorkshop(workshop);
          }}
        />
      );
    });
    return <div className={styles.ScheduleList}>{renderedRow}</div>;
  };
  const dayRender = array => {
    let renderedDay = array.map(session => {
      return sessionRender(session.list);
    });
    return <div>{renderedDay}</div>;
  };
  const daySchedule = renderData => {
    return (
      <React.Fragment>
        {dayRender(renderData.workshopsList.session)}
      </React.Fragment>
    );
  };

  return (
    <div className="App">
      <Header
        left={
          <div className={styles.ScheduleDateSelector}>
            <div
              className={currentSchedule === "5th" ? styles.active : undefined}
              onClick={() => setCurrentSchedule("5th")}
            >
              October 5<sup>th</sup>
            </div>
            <div
              className={currentSchedule === "6th" ? styles.active : undefined}
              onClick={() => setCurrentSchedule("6th")}
            >
              October 6<sup>th</sup>
            </div>
          </div>
        }
        right={
          <div>
            <Button height="70px" width="150px" name="Get your ticket" />{" "}
          </div>
        }
      />
      <CanvasContent hasBorder="true">
        <Modal active={modalActive} onModalClick={onModalClick}>
          <WorkshopCard type={workshopType} />
        </Modal>
        <div className={styles.ScheduleList}>
          {currentSchedule === "5th"
            ? daySchedule(data.firstDay)
            : daySchedule(data.secondDay)}
        </div>
      </CanvasContent>
    </div>
  );
};

export default Schedule;
