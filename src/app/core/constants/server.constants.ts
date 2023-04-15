// These constants are injected via webpack environment variables.

// You can add more variables in webpack.common.js or in profile specific webpack.<dev|prod>.js files.
// If you change the values in the webpack config files, you need to re run webpack to update the application

import {environment} from '../../environments/environment';

export const serverConstants = {
  SERVER_API_URL : environment.SERVER_API_URL,
  WEBS_SOCKET_URL : environment.WEBS_SOCKET_URL,
  SERVER_MOCKS_API_URL : environment.SERVER_MOCKS_API_URL,
}
