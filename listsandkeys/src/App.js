import './App.css';
import Blog from './component/blog';
import NumberList from './component/NumberLists';
import TodoList from './component/todoList';

 const number=[1,2,3,4,5];
 const todos=[
  {id:'1',text:'Learn React JS'},
  {id:'2',text:'Goto Supper market'},
  {id:'3',text:'Learn Java'}
 ]
 const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
function App() {
  return (
    <div className="App">
      <NumberList number={number}/>
      <TodoList todos={todos}/>
      <Blog posts={posts}/>
    </div>
  );
}

export default App;
