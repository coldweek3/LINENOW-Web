import IconLabel from "@components/label/IconLabel";
import * as S from "./BoothCard.styled";

interface BoothCardProps {
  boothTitle: React.ReactNode;
  boothSummary: string;
  boothLocationInfo: string;
  borderBottom?: string;
  boothImage?: string;
  children?: React.ReactNode;
  padding?: string;
  to?: string;
  onClickButtonAnimation?: boolean;
}
const DEFAULT_IMAGE_URL = "/images/image_waitingNoCard.png";

const BoothCardLayout = ({
  boothTitle,
  boothSummary,
  boothLocationInfo,
  boothImage,
  children,
  borderBottom,
  padding,
  to,
  onClickButtonAnimation,
}: BoothCardProps) => {
  return (
    <S.BoothCardWrapper
      to={to || ""}
      $borderBottom={borderBottom}
      padding={padding}
      onClickButtonAnimation={onClickButtonAnimation}
    >
      <S.BoothCardInformationWrapper>
        <S.BoothCardInformationImage src={boothImage || DEFAULT_IMAGE_URL} />
        <S.BoothCardInformationLabelWrapper>
          <S.BoothCardInformationNameLabel>
            {boothTitle}
          </S.BoothCardInformationNameLabel>

          <S.BoothCardInformationDescriptionLabel>
            {boothSummary}
          </S.BoothCardInformationDescriptionLabel>

          <IconLabel
            gap={"0.13rem"}
            icon={"location_gray_light"}
            iconSize={"1rem"}
          >
            <S.BoothCardInformationLocationLabel>
              {boothLocationInfo}
            </S.BoothCardInformationLocationLabel>
          </IconLabel>
        </S.BoothCardInformationLabelWrapper>
      </S.BoothCardInformationWrapper>
      {children}
    </S.BoothCardWrapper>
  );
};

export default BoothCardLayout;
