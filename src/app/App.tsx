import {useEffect, useState} from "react";
import {deleteData, downloadData} from "../api/api.ts";
import Form from "../component/Form.tsx";

function App() {
  const [data, setData] = useState<{id:number, content:string}[]|null>()
  useEffect(()=>{
    downloadData(setData);
      return
  }, [])
  return (data ?
    <div className={'flex flex-col p-20 gap-10'}>
      <div className={'flex flex-row gap-10'}>
        <h1 className={'text-6xl'}>Notes</h1>

          <svg onClick={() => downloadData(setData)} viewBox="0 0 24 24" className={'w-20 cursor-pointer'} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M4.06189 13C4.02104 12.6724 4 12.3387 4 12C4 7.58172 7.58172 4 12 4C14.5006 4 16.7332 5.14727 18.2002 6.94416M19.9381 11C19.979 11.3276 20 11.6613 20 12C20 16.4183 16.4183 20 12 20C9.61061 20 7.46589 18.9525 6 17.2916M9 17H6V17.2916M18.2002 4V6.94416M18.2002 6.94416V6.99993L15.2002 7M6 20V17.2916" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
          </svg>
      </div>
      <div className={'flex flex-row w-full min-h-96 h-full gap-10'}>
        {data && data.map((item) => <div className={'p-10 border border-black relative'} key={item.id} id={`${item.id}`}><span onClick={() => deleteData(item.id, setData)} className={'absolute w-6 text-center cursor-pointer border border-red-600 rounded-2xl m-2 text-red-600 right-0 top-0'}>X</span>{item.content}</div>)}
      </div>
        <Form id={data.length}/>
    </div> : <div className={"text-9xl m-auto w-screen"}>ЗАГРУЗКА</div>
  )
}

export default App
