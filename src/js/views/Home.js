import React, { useEffect } from "react";
import JoinedChatsList from "../components/JoinedChatsList";
import AvailableChatsList from "../components/AvailableChatsList";
import ViewTitle from "../components/shared/ViewTitle";
import  {fetchChats}  from "../actions/chats";
import { useDispatch, useSelector } from "react-redux";
import BaseLayout from '../layouts/Base';
import { withBaseLayout } from '../layouts/Base';

 function Home() {
 const dispatch=useDispatch();
//  const chats = useSelector((state)=> state.chats.items);
  const chats =useSelector(({chats}) => chats.items);

  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);

  return (
    // <BaseLayout>
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <JoinedChatsList chats={chats}/>
      </div>
      <div className="col-9 fh">
        <ViewTitle text={`Choose your channel Kshitij`} />
        <AvailableChatsList chats={chats}/>
      </div>
    </div>
    // </BaseLayout>
  );
}
export default withBaseLayout(Home);