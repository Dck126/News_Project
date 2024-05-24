class adminHandler {
  constructor(servcie) {
    this._service = servcie;

    this.postAdminNewsHandler = this.postAdminNewsHandler.bind(this);
    this.getAdminIdHandler = this.getAdminIdHandler.bind(this);
  }

  async postAdminNewsHandler(request, h) {
    const { id_admin, username_admin, password_admin, email_admin } =
      request.payload;
    try {
      const adminId = await this._service.postAdminService({
        id_admin,
        username_admin,
        password_admin,
        email_admin,
      });
      const response = h.response({
        status: 'success',
        data: {
          adminId,
        },
      });
      response.code(201);
      return response;
    } catch (error) {
      console.error('Error in postAdminNewsHandler:', error); // Log the error for debugging

      const response = h.response({
        status: 'error',
        message: 'An internal server error occurred',
      });
      response.code(500);
      return response;
    }
  }

  async getAdminIdHandler(request, h) {
    try {
      const { id_admin } = request.params;
      const admin = await this._service.getAdminIdService(id_admin);
      const response = h.response({
        status: 'success',
        data: {
          admin,
        },
      });
      response.code(200);
      return response;
    } catch (error) {
      console.error('Error in getAdminIdHandler:', error); // Log the error for debugging

      const response = h.response({
        status: 'error',
        message: 'An internal server error occurred',
      });
      response.code(500);
      return response;
    }
  }
}

module.exports = adminHandler;
