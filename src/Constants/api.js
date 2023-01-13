let token = localStorage.getItem('token');
module.exports = {
  baseUrl: 'http://127.0.0.1:8000/api/',
  imageUrl: 'http://127.0.0.1:8000',
  header: {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json'
    }
  },
  imgHeader: {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }
  }
}