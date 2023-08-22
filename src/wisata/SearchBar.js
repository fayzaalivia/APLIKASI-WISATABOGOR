import React from 'react';
import { TextInput } from 'react-native';

const SearchBar = ({ searchText, onSearch }) => {
  return (
    <TextInput
      value={searchText}
      onChangeText={onSearch}
      placeholder="Cari..."
    />
  );
};

export default SearchBar;
