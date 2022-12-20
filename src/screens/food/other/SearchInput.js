import React from 'react'
import { StyleSheet } from 'react-native';
import { Icon, Input, Span } from '../../../Components/Html'
import s from '../Food.module.scss'

function SearchInput({ searcher, foodAsc, foodDesc, navigation, textSearch}) {
    return (
    <Span h={57} pt={2}>
      <Span class={[s.containHead]}>
        <Icon size={26} style={styles.iconHome} name='home' onPress={() => navigation.navigate('Home')} />
        <Input w='60%' icon="search" pColor={'#777'} border={[1, '#ccc']} autoCapitalize='none' autoCorrect={false} spellCheck={true} value={textSearch} onChangeText={text => searcher(text)} p="جستجو" h={'85%'} mt={6} dr='rtl' />
        <Span class={s.containAscDesc}>
          <Icon onPress={foodAsc} size={21} style={{padding: 4}} name="arrow-down" color='#555' />
          <Span ph={6}></Span>
          <Icon onPress={foodDesc} size={21} style={{padding: 4}} name="arrow-up" color='#555' />
        </Span>
      </Span>
    </Span>);
  }
export default SearchInput

const styles = StyleSheet.create({
  iconHome: {
    paddingHorizontal: 10,
    textAlign: 'center',
    paddingTop: 10,
    color: '#777',
  },
})