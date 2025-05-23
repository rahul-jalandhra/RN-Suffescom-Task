import { SafeAreaView, StyleSheet, FlatList, ActivityIndicator, View, Platform } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import Header from '../../components/Header'
import UserCardLoading from '../../components/UserCardLoading'
import UserCard from '../../components/UserCard'
import useCharacters from '../../hooks/useCharacters'
import { CharacterType } from '../../types/character'

const HomeScreen = () => {
  const { characters, loading, loadingMore, refreshing } = useAppSelector(state => state.home);
  const { fetchInitialCharacters, fetchMoreCharacters, refreshCharacters } = useCharacters();

  useEffect(() => {
    fetchInitialCharacters();
  }, []);

  const onRefresh = useCallback(() => {
    refreshCharacters();
  }, [refreshCharacters])

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === 'android' ? 30 : 0 }}>
      <Header />
      <FlatList
        data={loading ? [1, 2, 3, 4, 5, 6, 7, 8] as never : characters}
        keyExtractor={(item, index) => String(index)}
        refreshing={refreshing}
        onRefresh={onRefresh}
        renderItem={({ item }: { item: CharacterType }) =>
          loading ? (
            <UserCardLoading />
          ) : (
            <UserCard
              name={item.name}
              image={item.image}
              status={item.status}
              description={item.type}
            />
          )
        }
        ListFooterComponent={
          loadingMore ? (
            <View style={{ paddingVertical: 16 }}>
              <ActivityIndicator size="small" color="#00C853" />
            </View>
          ) : null
        }
        style={{ flex: 1 }}
        onEndReached={fetchMoreCharacters}
      />
    </SafeAreaView>
  )
}

export default HomeScreen;