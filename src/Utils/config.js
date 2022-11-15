export const urlConfig = {
  baseUrl: 'https://91b60564-5efc-4e79-bac8-075bfeea7aca.mock.pstmn.io/',
};

export const module = {
    live: 'streamvideo',
    library: 'folderlist',
}

export const endPointConfig = {
  live: `${module.live}`,
  library: `${module.library}`,
};

export const RES_STATUS = {
  SUCCESS: 200,
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500,
}
