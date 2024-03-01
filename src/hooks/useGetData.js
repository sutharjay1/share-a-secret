import { doc, getDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { db } from '../Firebase/firebase.config';
import { getMessage, revealMessage } from '../store/messageSlice';

const useGetData = (messageID) => {
  const dispatch = useDispatch();

  const getData = async () => {
    const result = doc(db, 'message', messageID);
    const snap = await getDoc(result);
    dispatch(getMessage(snap.data()));
    dispatch(revealMessage(true));
  };
  return { getData };
};

export default useGetData;
