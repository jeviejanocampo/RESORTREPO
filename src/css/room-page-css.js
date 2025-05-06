import { StyleSheet } from 'react-native';

const RoomPageCSS = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#f9f9f9',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  headerScroll: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  category: {
    backgroundColor: '#e6e6e6',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  activeCategory: {
    backgroundColor: '#cce5ff',
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
  },
  body: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  selectedText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  placeholderText: {
    fontSize: 16,
    color: '#aaa',
  },

  cardFull: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20, // slightly increased for better spacing
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  
  card: {
    width: 100,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 15,
    marginBottom: 16,
    marginTop: 4,
    marginHorizontal: '1%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImageWrapper: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },

  cardImage: {
    width: 300,
    height: '100%',
    resizeMode: 'cover',
  },

  cardText: {
    paddingHorizontal: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  
  rateText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  
  viewButton: {
    backgroundColor: '#3498db',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  
  viewButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  
  
});

export default RoomPageCSS;
