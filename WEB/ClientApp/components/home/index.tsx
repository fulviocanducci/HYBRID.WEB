import * as React from 'react';

interface IItem {
  name: string;
}

export default function Home() {
  const [name, setName] = React.useState('');
  const [items, setItems] = React.useState<IItem[]>([]);
  const handleChangeName = (e: any) => {
    setName(e.target.value);
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setItems(datas => [...datas, { name }]);
    setName('');
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" onChange={handleChangeName} value={name} className="form-control form-control-sm" />        
        </div>
        <div className="mt-2 mb-2">
          <button className="btn btn-primary" type="submit">Adicionar</button>
        </div>
      </form>
      <div className="mt-3">
        <ul>
          {items && items.map((item, index) => <li key={index}>{ item.name }</li> )}
        </ul>
      </div>
    </>
  )
}