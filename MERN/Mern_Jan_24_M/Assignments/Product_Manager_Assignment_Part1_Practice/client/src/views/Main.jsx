import Form from '../components/Form';
import Display from '../components/Display';
import React, {useState} from 'react';

const Main = () => {

    const [refresh, setRefresh] = useState(false)

    const reloadList = ()=>{
        setRefresh(!refresh)
    }
    return (
        <div>
            <Form reloadList ={reloadList}/>
            <Display refresh={refresh} reloadList ={reloadList}/>
        </div>
    )
}

export default Main;