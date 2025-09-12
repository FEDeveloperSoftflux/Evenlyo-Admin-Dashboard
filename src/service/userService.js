import Api from './index';
import { endPoints, requestType } from '../constants';

export const getClients = (params) => {
  return Api(endPoints.userManagement.getClients, params, requestType.GET);
};

export const getVendors = (params) => {
  return Api(endPoints.userManagement.getVendors, params, requestType.GET);
};

export const blockClient = (id, params) => {
  // params should be { action: 'block' } or { action: 'unblock' }
  return Api(endPoints.userManagement.blockClient(id), params, requestType.PATCH);
};

export const unBlockClient = (id, params) => {
  // kept for symmetry; backend expects { action: 'block'|'unblock' }
  return Api(endPoints.userManagement.unBlockClient(id), params, requestType.PATCH);
};

export const blockVendor = (id, params) => {
  return Api(endPoints.userManagement.blockVendor(id), params, requestType.PATCH);
};

export const unBlockVendor = (id, params) => {
  return Api(endPoints.userManagement.unBlockVendor(id), params, requestType.PATCH);
};

export const sendEmailToVendor = (params) => {
  return Api(endPoints.userManagement.sendEmailToVendor, params, requestType.POST);
};

export const sendEmailToClients = (params) => {
  return Api(endPoints.userManagement.sendEmailToClients, params, requestType.POST);
};

export default {
  getClients,
  getVendors,
  blockClient,
  unBlockClient,
  blockVendor,
  unBlockVendor,
  sendEmailToVendor,
  sendEmailToClients,
};
