import React, { useCallback, useMemo, useState } from "react";
import { CalendarGrid } from "../calendar-grid/CalendarGrid";
import moment from "moment";
import { CalendarBar } from "../calendar-bar/CalendarBar";
import styled from "styled-components";

moment.updateLocale("en", { week: { dow: 1 } });

const CalendarMainStyled = styled.div`
  background-color: white;
  border-radius: 8px;
  margin: 40px 20px;
  padding: 40px 20px;
`;

const CalendarMain: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(moment());

  const startDay = useMemo(
    () => currentDate.clone().startOf("month").startOf("week"),
    [currentDate]
  );

  const handleClickLeft = useCallback(
    () => setCurrentDate((prev) => prev.clone().subtract(1, "month")),
    []
  );
  const handleClickRight = useCallback(
    () => setCurrentDate((prev) => prev.clone().add(1, "month")),
    []
  );

  return (
    <CalendarMainStyled>
      <CalendarBar
        handleClickLeft={handleClickLeft}
        handleClickRight={handleClickRight}
        currentDate={currentDate}
      />
      <CalendarGrid currentDate={currentDate} startDay={startDay} />
    </CalendarMainStyled>
  );
};

export { CalendarMain };
