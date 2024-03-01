import { addDoc, collection } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { db } from '../Firebase/firebase.config';
import { addMessage, addMessageID } from '../store/messageSlice';

const usePutData = (messageRef) => {
  const dispatch = useDispatch();

  const putData = async () => {
    const result = await addDoc(collection(db, 'message'), {
      message: messageRef?.current?.value,
    });
    dispatch(addMessage(messageRef?.current?.value));
    dispatch(addMessageID(result.id));
  };
  return { putData };
};

export default usePutData;
