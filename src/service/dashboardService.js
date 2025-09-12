import { endPoints, requestType } from "../constants";
import Api from "./index";

export const getStats = () => {
  return Api(endPoints.dashboard.getStats, null, requestType.GET);
};