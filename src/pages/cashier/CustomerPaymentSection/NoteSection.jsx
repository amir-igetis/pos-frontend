import { selectCartItems, setNote } from '@/ReduxToolkit/feature/Cart/cartSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export const NoteSection = () => {
  const dispatch = useDispatch();
  const note = useSelector(selectCartItems);

  const handleNoteChange= (e) => {
    dispatch(setNote(e.target.value));
  }



  return (
    <div>NoteSection</div>
  )
}
