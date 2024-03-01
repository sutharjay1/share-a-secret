import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../Firebase/firebase.config';
import { useDispatch } from 'react-redux';
import { getMessage } from '../store/messageSlice';
import { useNavigate } from 'react-router-dom';

const useFlushData = (messageID) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const flushData = async () => {
    const docRef = doc(db, 'message', messageID);
    await deleteDoc(docRef);
    // window.location.reload();
    dispatch(getMessage(null));
    navigate('/');
  };
  return { flushData };
};

export default useFlushData;
