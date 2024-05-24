class News {
  constructor(service) {
    this._service = service;

    this.postNewsHandler = this.postNewsHandler.bind(this);
    this.getNewsHandler = this.getNewsHandler.bind(this);
    this.getNewsIdHandler = this.getNewsIdHandler.bind(this);
    this.putNewsIdHandler = this.putNewsIdHandler.bind(this);
    this.deleteNewsIdHandler = this.deleteNewsIdHandler.bind(this);
  }

  async postNewsHandler(request, h) {
    const { judul, isi_berita, gambar, id_wartawan } = request.payload;

    try {
      const news = await this._service.postNewsService({
        judul,
        isi_berita,
        gambar,
        id_wartawan,
      });

      const response = h.response({
        status: 'success',
        message: 'berita berhasil ditambahkan',
        data: {
          news,
        },
      });
      response.code(201);
      return response;
    } catch (error) {
      console.error('Error in postNewsHandler:', error); // Log the error for debugging

      const response = h.response({
        status: 'error',
        message: 'An internal server error occurred',
      });
      response.code(500);
      return response;
    }
  }

  async getNewsHandler(request, h) {
    try {
      const news = await this._service.getNewsService();

      const response = h.response({
        status: 'success',
        data: news,
      });
      response.code(200);
      return response;
    } catch (error) {
      console.error('Error in getNewsHandler:', error);

      // Return an error response in case of failure
      const response = h.response({
        status: 'error',
        message: 'Failed to retrieve news',
      });
      response.code(500); // Set status code 500 for internal server error

      return response;
    }
  }

  async getNewsIdHandler(request, h) {
    try {
      const { id_berita } = request.params;
      const news = await this._service.getNewsIdService(id_berita);

      const response = h.response({
        status: 'success',
        data: {
          news,
        },
      });
      response.code(200);
      return response;
    } catch (error) {
      console.error('Error in getNewsIdHandler:', error);

      // Return an error response in case of failure
      const response = h.response({
        status: 'error',
        message: 'Failed to retrieve news Id',
      });
      response.code(500); // Set status code 500 for internal server error

      return response;
    }
  }

  async putNewsIdHandler(request, h) {
    try {
      const { judul, isi_berita, gambar, id_wartawan } = request.payload;

      const { id_berita } = request.params;
      const news = await this._service.putNewsIdService(id_berita, {
        judul,
        isi_berita,
        gambar,
        id_wartawan,
      });
      const response = h.response({
        status: 'success',
        data: {
          news,
        },
      });
      response.code(200);
      return response;
    } catch (error) {
      console.error('Error in putNewsIdHandler:', error);

      // Return an error response in case of failure
      const response = h.response({
        status: 'error',
        message: 'Failed to edit news Id',
      });
      response.code(500); // Set status code 500 for internal server error

      return response;
    }
  }

  async deleteNewsIdHandler(request, h) {
    const { id_berita } = request.params;

    try {
      const news = await this._service.deleteNewsIdService(id_berita);

      const response = h.response({
        status: 'success',
        data: {
          news,
        },
      });
      response.code(200);
      return response;
    } catch (error) {
      console.error('Error in deleteNewsIdHandler:', error);

      // Return an error response in case of failure
      const response = h.response({
        status: 'error',
        message: 'Failed to delete news Id',
      });
      response.code(500); // Set status code 500 for internal server error
      return response;
    }
  }
}

module.exports = News;
