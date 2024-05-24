const { nanoid } = require('nanoid');
const { Pool } = require('pg');

class NewsService {
  constructor() {
    this._pool = new Pool();
  }

  async postNewsService({ judul, isi_berita, gambar, id_wartawan }) {
    const id_berita = `Gaskan-${nanoid(16)}`;
    const tanggal = new Date().toISOString();
    const query = {
      text: 'insert into berita values ($1, $2, $3, $4, $5, $6) returning id_berita',
      values: [id_berita, tanggal, judul, isi_berita, gambar, id_wartawan],
    };
    try {
      const result = await this._pool.query(query);
      return result.rows[0].id_berita;
    } catch (error) {
      // Log the error for debugging
      console.error('Error in postNewsService:', error);
      // You can also throw an error here if needed
      throw new Error('Failed to insert news record');
    }
  }

  async getNewsService() {
    try {
      const resultNews = await this._pool.query('SELECT * FROM berita');
      return resultNews.rows;
    } catch (error) {
      // Log the error for debugging
      console.error('Error in getNewsService:', error);
      // You can also throw an error here if needed
      throw new Error('Failed to get all News');
    }
  }

  async getNewsIdService(id_berita) {
    const query = {
      text: 'select * from berita where id_berita = $1',
      values: [id_berita],
    };
    try {
      const resultIdNews = await this._pool.query(query);
      return resultIdNews.rows;
    } catch (error) {
      // Log the error for debugging
      console.error('Error in getNewsIdService:', error);
      // You can also throw an error here if needed
      throw new Error('Failed to get Id News');
    }
  }

  async putNewsIdService(
    id_berita,
    { judul, isi_berita, gambar, id_wartawan }
  ) {
    const query = {
      text: 'update berita set judul = $1, isi_berita = $2, gambar = $3, id_wartawan = $4 where id_berita = $5 returning id_berita',
      values: [judul, isi_berita, gambar, id_wartawan, id_berita],
    };
    try {
      const resultIdNews = await this._pool.query(query);
      return resultIdNews.rows.length;
    } catch (error) {
      // Log the error for debugging
      console.error('Error in putNewsIdService:', error);
      // You can also throw an error here if needed
      throw new Error('Failed to edit Id News');
    }
  }

  async deleteNewsIdService(id_berita) {
    const query = {
      text: 'delete from berita where id_berita = $1 returning id_berita',
      values: [id_berita],
    };

    try {
      const resultDeleteIdNews = await this._pool.query(query);
      return resultDeleteIdNews.rows.length;
    } catch (error) {
      // Log the error for debugging
      console.error('Error in deleteNewsIdService:', error);
      // You can also throw an error here if needed
      throw new Error('Failed to delete Id News');
    }
  }
}

module.exports = NewsService;
