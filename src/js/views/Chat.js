import React from 'react';
import { useParams } from 'react-router-dom';

import ChatUserList from '../components/ChatUsersList';
import ChatMessagesList from '../components/ChatMessagesList';
import ViewTitle from '../components/shared/ViewTitle';
import BaseLayout from '../layouts/Base';
import { withBaseLayout } from '../layouts/Base';

function Chat() {

  const {id} = useParams();
  return (
    // <BaseLayout canGoBack={true}>
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <ChatUserList />
      </div>
      <div className="col-9 fh">
        <ViewTitle text={`Joined Channel: ${id}`}/>
        <ChatMessagesList />
      </div>
    </div>
    // </BaseLayout>
  )
}

export default withBaseLayout(Chat, {canGoBack: true});