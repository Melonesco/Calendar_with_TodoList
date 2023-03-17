import React, { useCallback, useMemo, useState } from "react";
import moment from "moment";
import { CalendarCurrentDate } from "./CalendarCurrentDate";
import {
  CalendarGridStyled,
  CalendarContainerStyled,
  CurrentDateStyled,
} from "./styles";
import { Modal } from "../../todo-list/Modal";
import { Storage } from "../../../storage/Storage";

const totalDays = 35;

interface ICalendarGrid {
  currentDate: moment.Moment;
  startDay: moment.Moment;
}

const CalendarGrid: React.FC<ICalendarGrid> = ({ currentDate, startDay }) => {
  const day = useMemo(() => startDay.clone().subtract(1, "day"), [startDay]);
  const daysArray = useMemo(
    () => [...Array(totalDays)].map(() => day.add(1, "day").clone()),
    [day]
  );
  const isCurrentDay = useCallback(
    (day: moment.Moment) => moment().isSame(day, "day"),
    []
  );
  const isCurrentMonth = useCallback(
    (day: moment.Moment) => currentDate.isSame(day, "month"),
    [currentDate]
  );

  //const [date, setDate] = useState<any[]>([]);
  const [date, setDate] = useState<any>(null);

  const getData = (e: any) => {
    //setDate((prev) => [...prev, e.format("X")]);
    setDate(e.format("X"));
    setModal(!modal);
  };

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div>
      <CalendarGridStyled>
        {daysArray.map((dateItem: moment.Moment) => (
          <div key={dateItem.format("X")}>
            {!isCurrentDay(dateItem) ? (
              <CalendarContainerStyled onClick={() => getData(dateItem)}>
                <CalendarCurrentDate
                  isCurrentMonth={isCurrentMonth(dateItem)}
                  dateItem={dateItem}
                />
                <div>
                  {Storage.map((item, index) =>
                    item.date === dateItem.format("X") ? (
                      <div key={index}>✅ 4 tasks</div>
                    ) : null
                  )}
                </div>
              </CalendarContainerStyled>
            ) : (
              <CalendarContainerStyled onClick={getData}>
                <CurrentDateStyled>
                  <CalendarCurrentDate
                    isCurrentMonth={isCurrentMonth(dateItem)}
                    dateItem={dateItem}
                  />
                </CurrentDateStyled>
              </CalendarContainerStyled>
            )}
          </div>
        ))}
      </CalendarGridStyled>
      {modal && (
        <Modal toggleModal={toggleModal} date={date} setModal={setModal} />
      )}
    </div>
  );
};

export { CalendarGrid };
