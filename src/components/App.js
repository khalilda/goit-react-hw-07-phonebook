import React, { useEffect } from 'react';
import AppStyle from './AppStyle.module.css';
import { ListContact } from './ListContact/ListContact';
import { FormContact } from './FormContact/FormContact';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/backendAPI';
import { FilterContact } from './FilterContact/FilterContact';
import { getError, getIsLoading } from './redux/contactsSelector';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={AppStyle.container}>
      <h1 className={AppStyle.primeryTitle}>Phonebook</h1>
      <FormContact />
      {/* <ToastContainer /> */}

      <h2 className={AppStyle.secondaryTitle}>Contacts </h2>
      <FilterContact />
      {isLoading && !error && <p>Request in progress...</p>}
      <ListContact />
    </div>
  );
};
