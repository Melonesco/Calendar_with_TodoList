import React from "react";
import moment from "moment";
import {
  CalendarBarBlockStyled,
  CalendarBarStyled,
  CalendarBarTitleStyled,
  CalendarBarButtonStyled,
  CalendarBarMonthsStyled,
  CalendarBarMonthStyled,
  CalendarBarLogoStyled,
  CalendarBarTextStyled,
} from "./CalendarBarStyled";
import LeftIcon from "../../../images/icons/left.png";
import RightIcon from "../../../images/icons/right.png";
//import LogoIcon from "../../../images/icons/logo.png";

interface ICalendarBar {
  handleClickLeft: () => void;
  handleClickRight: () => void;
  currentDate: moment.Moment;
}

const CalendarBar: React.FC<ICalendarBar> = ({
  handleClickLeft,
  handleClickRight,
  currentDate,
}) => {
  return (
    <CalendarBarStyled>
      <CalendarBarTitleStyled>
        {/*<CalendarBarLogoStyled src={LogoIcon} alt="logo" />*/}
        {/*<CalendarBarTextStyled>Calendar</CalendarBarTextStyled>*/}
      </CalendarBarTitleStyled>
      <CalendarBarBlockStyled>
        <CalendarBarButtonStyled
          onClick={handleClickLeft}
          src={LeftIcon}
          alt="alt"
        />
        <CalendarBarMonthsStyled>
          <CalendarBarMonthStyled>
            {currentDate.format("MMMM")}
          </CalendarBarMonthStyled>
          <CalendarBarMonthStyled>
            {currentDate.format("YYYY")}
          </CalendarBarMonthStyled>
        </CalendarBarMonthsStyled>
        <CalendarBarButtonStyled
          onClick={handleClickRight}
          src={RightIcon}
          alt="alt"
        />
      </CalendarBarBlockStyled>
    </CalendarBarStyled>
  );
};

export { CalendarBar };
