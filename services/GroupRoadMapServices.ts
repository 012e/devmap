import { get } from "../utils/request"


export const getGroupRoadMap = async () => {
  const result = await get(`groups`);
  return result;
}