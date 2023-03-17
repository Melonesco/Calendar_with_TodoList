import React from "react";
import moment from "moment";
import { CalendarDateFormatStyled, CalendarDateStyled } from "./styles";

interface IDate {
  isCurrentMonth: boolean;
  dateItem: moment.Moment;
}

const CalendarCurrentDate: React.FC<IDate> = ({ isCurrentMonth, dateItem }) => {
  return (
    <CalendarDateStyled>
      <CalendarDateFormatStyled isSelectedMonth={isCurrentMonth}>
        {dateItem.format("DD")}
      </CalendarDateFormatStyled>
      <CalendarDateFormatStyled isSelectedMonth={isCurrentMonth}>
        {dateItem.format("dd")}
      </CalendarDateFormatStyled>
    </CalendarDateStyled>
  );
};

export { CalendarCurrentDate };
