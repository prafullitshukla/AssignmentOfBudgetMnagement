import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addExpense} from './actions';
import {TextInput, Button} from 'react-native-paper';

const ExpenseForm = () => {
  const [item, setItem] = useState('');
  const [plannedAmount, setPlannedAmount] = useState('');
  const [actualAmount, setActualAmount] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addExpense(item, plannedAmount, actualAmount));
    setItem('');
    setPlannedAmount('');
    setActualAmount('');
  };

  return (
    <>
      <TextInput label="Item" value={item} onChangeText={setItem} />
      <TextInput
        label="Planned Amount"
        value={plannedAmount}
        onChangeText={setPlannedAmount}
      />
      <TextInput
        label="Real Amount"
        value={actualAmount}
        onChangeText={setActualAmount}
      />
      <Button onPress={handleSubmit} mode="contained">
        AddDetail
      </Button>
    </>
  );
};

export default ExpenseForm;
