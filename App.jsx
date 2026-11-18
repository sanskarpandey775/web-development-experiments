import React,{useEffect,useState} from 'react';

export default function App(){
  const [notes,setNotes]=useState([]),[title,setTitle]=useState(''),[body,setBody]=useState('');
  async function load(){setNotes(await fetch('/api/notes').then(r=>r.json()))}
  useEffect(()=>{load()},[]);
  async function add(e){e.preventDefault();await fetch('/api/notes',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({title,body})});setTitle('');setBody('');load()}
  async function remove(id){await fetch('/api/notes/'+id,{method:'DELETE'});load()}
  return <main><h1>MERN Notes</h1><form onSubmit={add}><input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" required/><textarea value={body} onChange={e=>setBody(e.target.value)} placeholder="Note" required/><button>Add note</button></form>{notes.map(n=><article key={n._id}><h2>{n.title}</h2><p>{n.body}</p><button onClick={()=>remove(n._id)}>Delete</button></article>)}</main>
}
