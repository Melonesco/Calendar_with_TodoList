import styled from "styled-components";

export const CalendarBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const CalendarBarTitleStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const CalendarBarLogoStyled = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const CalendarBarTextStyled = styled.h2`
  font-size: 32px;
  line-height: 30px;
  font-weight: bold;
`;

export const CalendarBarBlockStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const CalendarBarButtonStyled = styled.img`
  outline: none;
  width: 40px;
  height: 40px;
  font-size: 16px;
  background-color: #a0abfd;
  color: #ffffff;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  transition: all 0.2s linear;

  &:hover {
    color: #a0abfd;
    background-color: #ffffff;
  }
`;

export const CalendarBarMonthsStyled = styled.div`
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

export const CalendarBarMonthStyled = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
