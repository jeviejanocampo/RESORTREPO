const fetchRoomsByCategory = async (categoryId) => {
    try {
      const response = await fetch(`http://192.168.1.32:8000/api/fetch-rooms?option_category_id=${categoryId}`);
      const text = await response.text();
      return JSON.parse(text);
    } catch (error) {
      alert('Error fetching rooms: ' + error.message);
      return [];
    }
  };
  
  export default fetchRoomsByCategory;
  