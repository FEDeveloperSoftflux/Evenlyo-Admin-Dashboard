export const constants = {};
export const unauthorizePopup = {};
export const buyandsell = {};

export const requestType = {
  POST: 'post',
  PUT: 'put',
  GET: 'get',
  DELETE: 'delete',
};

export const apiHeaders = {
  contentType: 'Content-Type',
  application_json: 'application/json',
  multipart_data: 'multipart/form-data',
  language: 'LANG',
  authorization: 'Authorization',
};
export const endPoints = {
  login: {
    login: 'auth/admin/login',
    logout: 'auth/logout',
    verifySession: 'auth/me',
  },
  dashboard: {
    getStats: 'admin/dashboard/stats',
  },
  userManagement: {
    getClients: 'admin/users/clients',
    blockClient: (id) => `admin/users/${id}/status`,
    unBlockClient: (id) => `admin/users/${id}/status`,
    getVendors: 'admin/users/vendors',
    blockVendor: (id) => `admin/users/${id}/status`,
    unBlockVendor: (id) => `admin/users/${id}/status`,
    sendEmailToVendor: 'admin/users/vendors/send-email',
    sendEmailToClients: 'admin/users/clients/send-email',
  },
};