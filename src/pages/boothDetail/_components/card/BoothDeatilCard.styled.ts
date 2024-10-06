import styled from "styled-components";

export const BoothDetailCardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 540px;
`;

export const BoothDetailCardThumbnail = styled.img`
  width: 100%;
  height: 23.4375rem;
  display: flex;
  padding-bottom: 0.75rem;
`;

export const BoothDetailCardIndicatorWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  width: 100%;
`;

export const BoothDetailCardIndicator = styled.div<{ $active: boolean }>`
  width: 0.25rem;
  height: 0.25rem;

  border-radius: 50%;

  background-color: ${({ $active, theme }) =>
    $active
      ? theme.colors.scheme.blue.background
      : theme.colors.background.grayLight};

  transition: background-color 0.3s ease;
`;
