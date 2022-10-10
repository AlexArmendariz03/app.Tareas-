import {Header as Head , Icon } from 'semantic-ui-react'
export default function Header (){
    return (
        <div className="header">
            <Head as="h1" icon textalign="center" color="red">
                <Icon inverted color="red" name="list alternate outline" circular />
                <Head.Content> Listado de Tareas</Head.Content>
                </Head> 

        </div>
    )
}