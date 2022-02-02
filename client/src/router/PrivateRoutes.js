import {Route} from 'react-router-dom'



export default function PrivateRoutes (props) {

    return (
        <Route exact={props.exact} path={props.path} component={props.component}>

        </Route>
    )



}