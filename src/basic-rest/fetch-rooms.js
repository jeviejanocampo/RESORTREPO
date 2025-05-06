const fetchOptionCategories = async () => {
    try {
      const response = await fetch('http://192.168.1.32:8000/api/fetch-option-categories');
      const text = await response.text();
      return JSON.parse(text);
    } catch (error) {
      alert('Error fetching categories: ' + error.message);
      return [];
    }
  };
  
  export default fetchOptionCategories;
  