import styled from "styled-components";

export const CalendarGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 2px;
  background-color: #e5e5e5;
  border: 2px solid #e5e5e5;
  //margin: 20px;
  //height: 90vh;
`;

export const CalendarContainerStyled = styled.div`
  //min-width: 130px;
  //min-height: 130px;
  //height: 100%;
  width: 100%;
  height: 130px;
  background-color: white;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

export const CurrentDateStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  background-color: #edf8eb;
  color: darkred;
`;

export const CalendarDateStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CalendarDateFormatStyled = styled("h2")<{
  isSelectedMonth: boolean;
}>`
  padding: 10px;
  font-size: 12px;
  font-weight: bold;
  color: ${(props: any) => (props.isSelectedMonth ? "#A0ABFD" : "#E5E5E5")};
`;
