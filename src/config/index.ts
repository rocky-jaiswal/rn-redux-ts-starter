const environmentConfiguration = (environment: string) => {

  if (environment === 'development') {
    return {
      baseURL: `http://localhost:3001`,
      callbackURL : `http://localhost:3000/authCallback`
    };
  }
  return {
    baseURL: `https://localhost/api`,
    callbackURL: `https://localhost/authCallback`
  };
};

const Config = {
  env: environmentConfiguration(process.env.APP_ENV || 'development')
};

export default Config;
