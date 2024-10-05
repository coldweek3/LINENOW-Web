import BoothCardLayout from "./boothCardLayout";
import { WaitingDetail } from "@interfaces/waitingDetail";

interface BoothCardDetailProps {
  waitingDetail: WaitingDetail;
}

const BoothCardDetail = ({ waitingDetail }: BoothCardDetailProps) => {
  return (
    <>
      {waitingDetail ? (
        <BoothCardLayout
          boothImage={waitingDetail.booth.thumbnail}
          boothTitle={
            <>
              <span>{waitingDetail.party_size}명</span>
              <span> · </span>
              <span>{waitingDetail.booth?.name}</span>
            </>
          }
          boothSummary={waitingDetail.booth.description}
          boothLocationInfo={waitingDetail.booth.location}
          padding="1rem"
          onClickButtonAnimation={false}
        />
      ) : (
        <div>대기 정보가 없습니다.</div>
      )}
    </>
  );
};

export default BoothCardDetail;
