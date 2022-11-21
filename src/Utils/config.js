export const urlConfig = {
  baseUrl: 'https://91b60564-5efc-4e79-bac8-075bfeea7aca.mock.pstmn.io/',
  // baseUrl: 'https://103.15.51.109:92/api/',
};

export const module = {
    live: 'streamvideo',
    library: 'folderlist',
    login: 'Authenticate/login'
}

export const endPointConfig = {
  live: `${module.live}`,
  library: `${module.library}`,
  login: `${module.login}`
};

export const RES_STATUS = {
  SUCCESS: 200,
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500,
}
