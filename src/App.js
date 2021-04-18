
import './App.css';
import firebase, { db } from './firebase';
import { useEffect, useState } from 'react'
// import { Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';

function App() {
  const [name, setName] = useState('')

  // inputフォームで入力値を認識できるようにするため
  const hanleNewValue =(event)=> {
    setName(event.target.value)
  }
  // firebaseにDBを作成、DBの値を設定、inputフォームの値を空にする
  const handleSubmit = (event) =>{
    event.preventDefault()
    // membersという名前のDB追加
    const docId = db.collection("members").doc().id;
    // membersの値を定義
    db.collection("members").doc(docId).set({
        docId: docId,
        name: name,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setName('')
  }

  // firebaseからデータ取得するための配列のstate
  const [users, setUsers] = useState([]);
    //firebaseからデータ取得
  useEffect(() =>{
    db.collection("members").get().then((docs) => {
      docs.forEach(doc => {
        var data = doc.data();
        setUsers((users) => [...users,{name: data.name}])
      })
    }).catch(error => {
    // error
      console.log('error')
    })
  },[])
  return (
    <div className="App">
      <h1>firebase</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" value={name} onChange={hanleNewValue}></input>
        <button type="submit">登録</button>
      </form>
      {
      users.map(item => (
        <p>
          {item.name}
        </p>
      ))}
    </div>
  );
}

export default App;
