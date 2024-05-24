class AuthHandler {
  constructor(service, adminNewsService, jwtManager) {
    this._service = service;
    this._adminNewsService = adminNewsService;
    this._jwtManager = jwtManager;

    this.postAuthHandler = this.postAuthHandler.bind(this);
    this.putAuthHandler = this.putAuthHandler.bind(this);
    this.deleteAuthHandler = this.deleteAuthHandler.bind(this);
  }

  async postAuthHandler(request, h) {
    try {
      const { password_admin, email_admin } = request.payload;
      const id_admin = await this._adminNewsService.verifyAdminCredential(
        password_admin,
        email_admin
      );

      const accessToken = this._jwtManager.generateAccessToken({ id_admin });
      const refreshToken = this._jwtManager.generateRefreshToken({ id_admin });

      await this._service.postRefreshToken(refreshToken);

      const response = h.response({
        status: 'success',
        message: 'Adding Token has been success',
        data: {
          accessToken,
          refreshToken,
        },
      });
      response.code(201);
      return response;
    } catch (error) {
      console.error('Error in postAuthHandler:', error); // Log the error for debugging

      const response = h.response({
        status: 'error',
        message: 'An internal server error occurred',
      });
      response.code(500);
      return response;
    }
  }

  async putAuthHandler(request, h) {
    const { refreshToken } = request.payload;
    await this._service.verifyRefreshToken(refreshToken);
    const { id_admin } = this._jwtManager.verifyRefreshToken(refreshToken);

    const accessToken = this._jwtManager.generateAccessToken({ id_admin });
    const response = h.response({
      status: 'success',
      data: {
        accessToken,
      },
    });
    return response;
  }

  async deleteAuthHandler(request, h) {
    const { refreshToken } = request.payload;
    await this._service.verifyRefreshToken(refreshToken);
    await this._service.deleteRefreshToken(refreshToken);

    const response = h.response({
      status: 'success',
    });
    return response;
  }
}

module.exports = AuthHandler;
