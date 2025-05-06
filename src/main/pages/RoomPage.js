import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import RoomPageCSS from '../../css/room-page-css';
import fetchOptionCategories from '../../basic-rest/fetch-rooms';
import fetchRoomsByCategory from '../../basic-rest/fetch-rooms-by-category';
import RoomThumbnail from '../../assets/images/roomdefault.jpg';

const RoomPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchOptionCategories();
      setCategories(data);
    };
    loadCategories();
  }, []);

  useEffect(() => {
    const loadRooms = async () => {
      if (selectedId !== null) {
        const roomData = await fetchRoomsByCategory(selectedId);
        setRooms(roomData);
      }
    };
    loadRooms();
  }, [selectedId]);

  return (
    <SafeAreaView style={RoomPageCSS.container}>
      <View style={RoomPageCSS.header}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={RoomPageCSS.headerScroll}
        >
          {categories.map((item) => (
            <TouchableOpacity
              key={item.option_category_id}
              onPress={() => setSelectedId(item.option_category_id)}
              style={[
                RoomPageCSS.category,
                selectedId === item.option_category_id && RoomPageCSS.activeCategory,
              ]}
            >
              <Text style={RoomPageCSS.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={RoomPageCSS.body}>
        {selectedId ? (
          <ScrollView style={{ width: '100%' }} contentContainerStyle={{ paddingBottom: 20 }}>
            {rooms.length > 0 ? (
              rooms.map((room) => (
                <View key={room.room_id} style={RoomPageCSS.cardFull}>
                  <View style={RoomPageCSS.cardImageWrapper}>
                    <Image
                      source={require('../../assets/images/roomdefault.jpg')}
                      style={RoomPageCSS.cardImage}
                    />
                  </View>
                  <View style={RoomPageCSS.cardText}>
                    <View style={RoomPageCSS.topRow}>
                      <Text style={RoomPageCSS.rateText}>₱{room.rate_per_night} / night</Text>
                    </View>
                    <Text style={RoomPageCSS.cardTitle}>Room #{room.room_number}</Text>
                    <Text style={RoomPageCSS.cardSubtitle}>{room.room_type}</Text>
                    <View style={RoomPageCSS.bottomRow}>
                      <Text style={RoomPageCSS.cardSubtitle}>Pax: {room.pax}</Text>
                      <TouchableOpacity style={RoomPageCSS.viewButton}>
                        <Text style={RoomPageCSS.viewButtonText}>View</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))
            ) : (
              <Text>No rooms available for this category.</Text>
            )}
          </ScrollView>
        ) : (
          <Text style={RoomPageCSS.placeholderText}>Select a category</Text>
        )}
      </View>

    </SafeAreaView>
  );
};

export default RoomPage;
