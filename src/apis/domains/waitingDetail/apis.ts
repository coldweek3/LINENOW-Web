import { getResponse } from "@apis/instance";
import { GetWaitingDetailResponse } from "./_interfaces";
import { WaitingDetail } from "@interfaces/waitingDetail";

export interface BaseDTO<T> {
  data: T;
}

export interface GetWaitingDetailRequest {
  waitingID: number;
}

export const getWaitingDetail = async ({
  waitingID,
}: GetWaitingDetailRequest): Promise<WaitingDetail | null> => {
  const response = await getResponse<BaseDTO<WaitingDetail>>(
    `/api/v1/waitings/${waitingID}`
  );

  return response?.data ? GetWaitingDetailResponse(response?.data) : null;
};
