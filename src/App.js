import { useEffect, useState } from "react";
import "./App.css";
import Card from "./compos/Card";
function App() {
  const [Avta, setAvatar] = useState();
  let user = [];
  async function getUsers() {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => (user = json));
    getAvatar(user);
  }
  const editMethod = (data) => {
    let filtered = Avta.filter(function (value, index, arr) {
      if (index == data.idx){
        value.name=data.nm
        value.phone=data.phn
        value.website=data.web
        value.email=data.em
      } 
    });
  };
  const call = (e) => {
    let filtered = Avta.filter(function (value, index, arr) {
      if (index != e) return value;
    });
    setAvatar(filtered);
  };
  const callHeart = (e,b) => {
    console.log(e,b)
    let filtered = Avta.filter(function (value, index, arr) {
      if (index == e){
        value.heart=b
      }
      return (value)
    });
    setAvatar(filtered)
  };
  const getAvatar = (user) => {
    user.map((val, idx) => {
      user[idx] = {
        ...user[idx],
        url: `https://avatars.dicebear.com/v2/avataaars/${val.name}.svg?mood[]=happy`,
        heart:false
      };
    });
    setAvatar(user);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="App ">
      <div className="container p-3">
        <div className="row d-flex justify-content-start">
          {Avta
            ? Avta.map((val, idx) => {
                return (
                  <>
                    <Card
                      data={val}
                      idx={idx}
                      call={call}
                      callHeart={callHeart}
                      editMethod={editMethod}
                    />
                  </>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default App;
