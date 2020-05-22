import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          author="Liam" 
          timeAgo="Today at 4:20pm" 
          commentText="Haha the weed number"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail 
          author="Poppy" 
          timeAgo="Yesterday at 3:11pm" 
          commentText="The curse..." 
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail 
          author="Clive"
          timeAgo="Tuesday at 6:90pm" 
          commentText="Nice." 
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));