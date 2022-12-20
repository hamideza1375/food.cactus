import React, { useCallback, useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {useFocusEffect} from '@react-navigation/native'
const range = (from, to) => {
  const range = [];
  for (let i = from; i <= to; i++) {
    range.push(i);
  }
  return range;
}

function Pagination(props) {
  const { currentPage, current, setcurrent, setcurrentPage, pageLimit, pageNeighbours = 1, page, setpage, food, ass } = props;

  const fetchPageNumbers = () => {
    const totalPages = Math.ceil(food.length / pageLimit);
    if (totalPages > ((pageNeighbours * 2) + 3) + 2) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = currentPage + pageNeighbours
      let pages = range(startPage, endPage);
      if (startPage > 2 && !(totalPages - endPage) > 1) {
        const extraPages = range(startPage - ((pageNeighbours * 2) + 3) - (pages.length + 1), startPage - 1);
        pages = [['LEFT', ...pages], ...extraPages, ...pages];
      }
      else if (!startPage > 2 && (totalPages - endPage) > 1) {
        const extraPages = range(endPage + 1, endPage + ((pageNeighbours * 2) + 3) - (pages.length + 1));
        pages = [...pages, ...extraPages, ['RIGHT', ...pages]];
      }
      if (startPage > 2 && (totalPages - endPage) > 1) {
        pages = [['LEFT', ...pages], ...pages, ['RIGHT', ...pages]];
      }
      else pages = [['LEFT', ...pages], ...pages, ['RIGHT', ...pages]];
      return [1, ...pages, totalPages];
    }
    return range(1, totalPages);
  }

  const gotoPage = (page) => {
  setcurrentPage(page);
  setcurrent( food.filter((f,i)=> (
    i >= (page - 1) * pageLimit) && 
    (i < (page - 1) * pageLimit + pageLimit))
   )
  }

  const handleClick = (page) => gotoPage(page);

  const handleMoveLeft = () => gotoPage(currentPage - (pageNeighbours * 2) - 1);

  const handleMoveRight = () => gotoPage(currentPage + (pageNeighbours * 2) + 1);

  useEffect(() => { gotoPage(page) }, [ass])
  // useFocusEffect(useCallback(() => { gotoPage(page) }, [ass]))

  const pages = fetchPageNumbers();
  let total = (food.length / pageLimit)
  if (total <= 1) return null;

  return (
    <View style={styles.pagination}>
      {pages.map((page, index) => {

        if (page[0] === 'LEFT') return (
          <Pressable onPressIn={() => { setpage(page[1]) }}
            onPress={() => setpage(page => page > 2 && handleMoveLeft())} key={index} style={[styles.pageitem, { width: 50 }]}>
            <Text style={{ fontSize: 25, top: -1, color: '#37e' }}>»</Text>
          </Pressable>
        );

        if (page[0] === 'RIGHT') return (
          <Pressable onPressIn={() => { setpage(page[1]) }} onPress={() => handleMoveRight()} key={index} style={[styles.pageitem, { width: 50 }]}>
            <Text style={{ fontSize: 25, top: -1, color: '#37e' }} >«</Text>
          </Pressable>
        );

        return (
          <Pressable onPressIn={() => { setpage(page) }} onPress={() => handleClick(page)} key={index} style={[styles.pageitem, { backgroundColor: currentPage === page ? '#6cf' : '#efffff33' }]}>
            <Text style={[styles.pagelink, { color: currentPage === page ? '#24e' : '#555' }]} >{page}</Text>
          </Pressable>
        );

      })}
    </View>
  );


}


export default Pagination


const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 'auto',

  },
  pageitem: {
    width: 44,
    height: 44,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgb(197, 192, 192)',
    backgroundColor: '#efffff88',
    borderRadius: 3,
  }
})